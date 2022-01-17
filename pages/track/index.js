import Form from '../../components/form/form';
import Input from '../../components/form/input';
import Button from '../../components/form/button';
import ContentWrapper from '../../components/contentWrapper';
import { useMoralis } from 'react-moralis';
import { useState } from 'react';

const TrackWalletsPage = () => {
  const { Moralis } = useMoralis();
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'address') {
      setAddress(value);
    } else if (name === 'name') {
      setName(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const params = { address: address.toLowerCase() };
      await Moralis.Cloud.run('watchAddress', params);
      setAddress('');
      setName('');
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const disabled = !name || !address || (!address.length === 42 && 'disabled');

  return (
    <ContentWrapper>
      <Form title="Track Wallet" titleColour={'text-white'}>
        <Input
          type="text"
          name="address"
          placeholder="ETH Address"
          handleChange={handleChange}
          minLength={42}
          value={address}
        />
        <Input
          type="text"
          name="name"
          placeholder="Wallet Name"
          handleChange={handleChange}
          minLength={1}
          value={name}
        />
        <Button
          handleSubmit={handleSubmit}
          disabled={disabled}
          action="Track"
        />
      </Form>
    </ContentWrapper>
  );
};

export default TrackWalletsPage;
