import React, { useEffect, useRef } from 'react';
import { useMoralis } from 'react-moralis';
import ContentWrapper from '../components/contentWrapper';
import MintForm from '../components/mintForm';
import Modal from '../components/modal';
import TxStatus from '../components/txStatus';

const Web3 = require('web3');

const MintPage = () => {
  const { Moralis } = useMoralis();
  const web3 = useRef(null);
  const contract = process.env.NEXT_PUBLIC_CONTRACT;

  useEffect(() => {
    web3.current = new Web3(window.ethereum);
  }, []);

  const mintToken = async (_uri: string) => {
    const encodedFunction = web3.current.eth.abi.encodeFunctionCall(
      {
        name: 'mintToken',
        type: 'function',
        input: [
          {
            type: 'string',
            name: 'tokenURI',
          },
        ],
      },
      [_uri]
    );

    const transactionParameters = {
      to: contract,
      from: ethereum.selectedAddress,
      data: encodedFunction,
    };

    const txt = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });

    return txt;
  };

  const upload = async (file, name, description) => {
    try {
      Moralis.enableWeb3();
      const imageFile = new Moralis.File(file.name, file);
      await imageFile.saveIPFS();
      const imageURi = imageFile.ipfs();
      const metadata = { name, description, image: imageURi };
      const metadataFile = new Moralis.File('metadata.json', {
        base64: btoa(JSON.stringify(metadata)),
      });
      await metadataFile.saveIPFS();
      const metadataURI = metadataFile.ipfs();
      await mintToken(metadataURI).then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e, file, name, description) => {
    e.preventDefault();
    upload(file, name, description);
  };

  return (
    <ContentWrapper>
      <MintForm title="Mint NFT" handleSubmit={handleSubmit} />
      <Modal>
        <TxStatus />
      </Modal>
    </ContentWrapper>
  );
};

export default MintPage;
