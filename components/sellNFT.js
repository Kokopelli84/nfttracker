import { useState } from 'react';
import { useMoralis } from 'react-moralis';
import { useSelector, useDispatch } from 'react-redux';
import { changeTxStatus, changeResponse } from '../state/actions';
import Form from './form/form';
import Button from './form/button';
import Input from './form/input';
import TxStatus from './txStatus';
import Modal from '../components/modal';

const SellNFT = () => {
  const [amount, setAmount] = useState(0);
  const { current } = useSelector((state) => state);
  const { Moralis, account } = useMoralis();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(changeTxStatus('pending'));
    try {
      await Moralis.enableWeb3();

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
      dispatch(changeResponse(err.message));
      dispatch(changeTxStatus('error'));
    }
  };

  const message = 'Sell Order Successful';
  const link = `https://testnets.opensea.io/assets/${current.asset_contract.address}/${current.token_id}`;
  const linkText = 'View on OpenSea';

  return (
    <TxStatus message={message} link={link} linkText={linkText}>
      <div>
        <Form action="" className="flex flex-col " title={current.name}>
          <Input
            name="amount"
            placeholder="Listing price (ETH)"
            handleChange={handleChange}
            minLength="1"
            textColour={'text-black'}
          />
          <Button
            handleSubmit={handleSubmit}
            type="submit"
            state={amount}
            minLength={1}
            action="Sell"
          ></Button>
        </Form>
      </div>
    </TxStatus>
  );
};
export default SellNFT;
