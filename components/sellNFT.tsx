import React, { ChangeEventHandler, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { useDispatch, useSelector } from 'react-redux';
import { changeResponse, changeTxStatus } from '../state/actions';
import Button from './form/button';
import Form from './form/form';
import Input from './form/input';
import TxStatus from './txStatus';

const SellNFT = () => {
  const [amount, setAmount] = useState<number>(0);
  const { current } = useSelector((state) => state);
  const { Moralis, account } = useMoralis();
  const dispatch = useDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAmount(e.target.valueAsNumber);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(changeTxStatus('pending'));
    try {
      await(Moralis as any).enableWeb3();

      await Moralis.Plugins.opensea
        .createSellOrder({
          network: 'testnet',
          tokenAddress: current.asset_contract.address,
          tokenId: current.token_id,
          tokenType: 'ERC721',
          userAddress: account,
          startAmount: amount,
          endAmount: amount,
        })
        .then(() => {
          dispatch(changeTxStatus('success'));
        });
    } catch (err) {
      if (err instanceof Error) {
        dispatch(changeResponse(err.message));
        dispatch(changeTxStatus('error'));
      }
    }
  };

  const message = 'Sell Order Successful';
  const link = `https://testnets.opensea.io/assets/${current.asset_contract.address}/${current.token_id}`;
  const linkText = 'View on OpenSea';

  return (
    <TxStatus message={message} link={link} linkText={linkText}>
      <div>
        <Form handleSubmit={handleSubmit} title={current.name}>

          <Input
            value={amount}
            name="amount"
            type="number"
            placeholder="Listing price (ETH)"
            handleChange={handleChange}
            minLength="1"
            textColour="text-black"
          />
          <Button
            disabled={false}
            action="Sell"
           />
        </Form>
      </div>
    </TxStatus>
  );
};
export default SellNFT;
