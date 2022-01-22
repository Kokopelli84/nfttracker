import React, { ChangeEventHandler, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { useSelector, useDispatch } from 'react-redux';
import prettyAddress from '../helpers/prettyAddress';
import Form from './form/form';
import Button from './form/button';
import Input from './form/input';
import TxStatus from './txStatus';
import { changeResponse, changeTxStatus } from '../state/actions';

const TransferNFT = () => {
  const dispatch = useDispatch();
  const { Moralis } = useMoralis();
  const [address, setAddress] = useState('');
  const { current, response } = useSelector((state) => state);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(changeTxStatus('pending'));
    try {
      const options = {
        type: 'erc721',
        receiver: address,
        contractAddress: current.asset_contract.address,
        tokenId: current.token_id,
        awaitReceipt: false,
      };
      await (Moralis as any).authenticate({ signingMessage: 'hello world' });
      const tx = await (Moralis as any).transfer(options);

      tx.on('transactionHash', (hash: string) => {
        dispatch(changeResponse(hash));
        dispatch(changeTxStatus('success'));
      });
    } catch (err) {
      if(err instanceof Error) {
        dispatch(changeResponse(err.message));
        dispatch(changeTxStatus('error'));
      }
    }
  };

  const message = 'Request Successful';
  const info = 'View on BlockExplorer: ';
  const link = `https://rinkeby.etherscan.io/tx/${response}`;
  const linkText = prettyAddress(response);

  return (
    <TxStatus message={message} info={info} link={link} linkText={linkText}>
      <div>
        <Form handleSubmit={handleSubmit} title={current.name} titleColour="text-black">
          <Input
            name="address"
            placeholder="Recipient"
            handleChange={handleChange}
            minLength="42"
            textColour="text-black"
            />
          <Button
            action="Send"
          />
        </Form>
      </div>
    </TxStatus>
  );
};

export default TransferNFT;
