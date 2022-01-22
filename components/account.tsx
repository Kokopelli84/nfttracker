import React from 'react';
import { useMoralis } from 'react-moralis';
import prettyAddress from '../helpers/prettyAddress';
import Button from './button';

const Account = () => {
  const { authenticate, account } = useMoralis();
  const formattedAccount = account && prettyAddress(account);
  const buttonText = account ? formattedAccount : 'Authenticate';

  return (
    <div className="auth flex flex-row justify-end text-white pt-7 px-20 w-full">
      <Button text={buttonText} click={authenticate} />
    </div>
  );
};

export default Account;
