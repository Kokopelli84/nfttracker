import Form from '../../components/form/form';
import Input from '../../components/form/input';
import Button from '../../components/form/button';
import ContentWrapper from '../../components/contentWrapper';
import { useMoralis } from 'react-moralis';
import { useState } from 'react';

const TrackWalletsPage = () => {
  const { Moralis } = useMoralis();
  const [address, setAddress] = useState('');

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const params = { address: address.toLowerCase() };
      await Moralis.Cloud.run('watchAddress', params);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ContentWrapper>
      <Form title="Track Wallet" titleColour={'text-white'}>
        <Input
          type="text"
          name="address"
          placeholder="ETH Address"
          handleChange={handleChange}
          minLength={42}
        />
        <Button handleSubmit={handleSubmit} disabled={''} action="Track" />
      </Form>
    </ContentWrapper>
  );
};

export default TrackWalletsPage;
