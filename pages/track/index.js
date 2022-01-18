import Form from '../../components/form/form';
import Input from '../../components/form/input';
import Button from '../../components/form/button';
import ContentWrapper from '../../components/contentWrapper';
import { useMoralis } from 'react-moralis';
import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const TrackWalletsPage = () => {
  const { Moralis } = useMoralis();
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [chatId, setChatId] = useState('');
  // const [telegram, setTelegram] = useState(false);
  // const [email, setEmail] = useState(false);
  // const [twitter, setTwitter] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'address') {
      setAddress(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'chatId') {
      setChatId(value);
    }
    // else if (name === 'telegram') {
    //   setTelegram(!telegram);
    // } else if (name === 'email') {
    //   setEmail(!email);
    // } else if (name === 'twitter') {
    //   setTwitter(!twitter);
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const telegramAlert = telegram && 'telegram';
      // const emailAlert = email && 'email';
      // const twitterAlert = twitter && 'twitter';
      // const alertMethods = [telegramAlert, emailAlert, twitterAlert].filter(
      //   (alert) => alert !== false
      // );

      const params = { address: address.toLowerCase(), name, chatId };
      await Moralis.Cloud.run('watchAddress', params);
      setAddress('');
      setName('');
      setChatId('');
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const disabled =
    !name ||
    !address ||
    address.length !== 42 ||
    (chatId.length !== 14 && 'disabled');

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
        <Input
          type="text"
          name="chatId"
          placeholder="Telegram Chat ID"
          handleChange={handleChange}
          minLength={14}
          value={chatId}
        />
        {/* <div className="flex mt-3">
          <div className="mr-5 text-gray-400">
            <Input
              type="checkBox"
              name="telegram"
              handleChange={handleChange}
              value={telegram}
            />{' '}
            Telegram
          </div>
          {/* <div className="mr-5 text-gray-400">
            <Input
              type="checkBox"
              name="email"
              handleChange={handleChange}
              value={email}
            />{' '}
            Email
          </div>
          <div className="mr-5 text-gray-400">
            <Input
              type="checkBox"
              name="twitter"
              handleChange={handleChange}
              value={twitter}
            />{' '}
            Twitter
          </div> */}
        {/* </div> */}
        <button className="text-blue-500 w-fit">
          <FaInfoCircle className="inline mr-2" />
          Follow these instructions to get your Telegram chat ID
        </button>
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
