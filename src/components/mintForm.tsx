import { changeResponse, changeTxStatus } from '@/state/actions';
import { useAppSelector } from '@/state/hooks';
import React, { ChangeEventHandler, useState } from 'react';
import { MoralisFileSaveOptions, useMoralis } from 'react-moralis';
import { useDispatch } from 'react-redux';
import Form from './form/form';
import Input from './form/input';
import SubmitButton from './form/submit-button';
import Modal from './modal';
import TxStatus from './txStatus';

const MintForm = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { Moralis, account } = useMoralis();

  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [file, setFile] = useState<HTMLInputElement | File>();

  const { response } = useAppSelector(state => state);

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const elName = e.target.name;
    const { value } = e.target;

    if (elName === 'name') {
      setNameInput(value);
    } else if (elName === 'description') {
      setDescriptionInput(value);
    } else if (elName === 'upload' && e.target.files && e.target.files.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    setShowModal(true);
    dispatch(changeTxStatus('pending'));

    if (!nameInput || !descriptionInput || !file) return;

    try {
      await Moralis.enableWeb3();
      // Upload image to IPFS

      type MoralisFile = typeof Moralis.File & {
        hash: () => string;
        saveIPFS: (options?: MoralisFileSaveOptions & { useMasterKey: boolean }) => Promise<File>;
      };

      const imageFile = new Moralis.File(file.name, file) as unknown as MoralisFile;
      await imageFile.saveIPFS({ useMasterKey: true });
      const hash = imageFile.hash();

      // Create metadata
      const metadata = {
        name: nameInput,
        description: descriptionInput,
        image: `/ipfs/${hash}`,
      };

      // Upload metadate to IPFS
      const jsonFile = new Moralis.File('metadata.json', {
        // base64: Buffer.from(JSON.stringify(metadata), 'base64').toString('base64'),
        base64: btoa(JSON.stringify(metadata)),
      }) as unknown as MoralisFile;

      await jsonFile.saveIPFS();
      const metadataHash = jsonFile.hash();

      // Upload to Rarible
      await Moralis.Plugins.rarible
        .lazyMint({
          chain: 'rinkeby',
          userAddress: account,
          tokenType: 'ERC721',
          tokenUri: `ipfs/${metadataHash}`,
          royaltiesAmount: 0,
        })
        .then((raribleRes: any) => {
          dispatch(changeResponse(raribleRes));
          dispatch(changeTxStatus('success'));
        });
    } catch (err) {
      if (err instanceof Error) {
        dispatch(changeResponse(err.message));
        dispatch(changeTxStatus('error'));
      }
    }
  };

  const message = 'NFT Successfully Minted';
  const res = (response as any).data && (response as any).data.result;
  const link =
    res && `https://rinkeby.rarible.com/token/flow/${res.tokenAddress}:${res.tokenId}?tab=details`;
  const linkText = 'View on Rarible';

  const disabled = !nameInput || !descriptionInput || !file;

  return (
    <>
      <Form handleSubmit={handleSubmit} title="LazyMint NFT on Rarible" titleColour="text-white">
        <Input name="name" placeholder="NFT Name" handleChange={handleChange} minLength={1} />
        <Input
          name="description"
          placeholder="NFT Description"
          handleChange={handleChange}
          minLength={1}
        />
        <Input name="upload" type="file" handleChange={handleChange} />

        <SubmitButton disabled={disabled} action="Mint" />
      </Form>

      <Modal show={showModal} cancel={() => setShowModal(false)}>
        <TxStatus message={message} link={link} linkText={linkText}>
          <></>
        </TxStatus>
      </Modal>
    </>
  );
};

export default MintForm;
