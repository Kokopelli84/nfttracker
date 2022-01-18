import { useMoralis } from 'react-moralis';
import { useState } from 'react';
import prettyAddress from '../helpers/prettyAddress';
import { useSelector, useDispatch } from 'react-redux';
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

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
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
      await Moralis.authenticate({ signingMessage: 'hello world' });
      const tx = await Moralis.transfer(options);

      tx.on('transactionHash', (hash) => {
        dispatch(changeResponse(hash));
        dispatch(changeTxStatus('success'));
      });
    } catch (err) {
      dispatch(changeResponse(err.message));
      dispatch(changeTxStatus('error'));
    }
  };

  const message = 'Request Successful';
  const info = 'View on BlockExplorer: ';
  const link = `https://rinkeby.etherscan.io/tx/${response}`;
  const linkText = prettyAddress(response);

  return (
    <TxStatus message={message} info={info} link={link} linkText={linkText}>
      <div>
        <Form title={current.name} titleColour={'text-black'}>
          <Input
            name="address"
            placeholder="Recipient"
            handleChange={handleChange}
            minLength="42"
            textColour={'text-black'}
          />
          <Button
            handleSubmit={handleSubmit}
            state={address}
            action="Send"
            minLength="42"
          />
        </Form>
      </div>
    </TxStatus>
  );
};

export default TransferNFT;
