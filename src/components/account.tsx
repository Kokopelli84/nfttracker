import React from 'react';
import { useMoralis } from 'react-moralis';
import prettyAddress from '../helpers/prettyAddress';
import Button from './button';

const Account = () => {
  const { authenticate, account } = useMoralis();
  const formattedAccount = account && prettyAddress(account);
  const buttonText = account ? formattedAccount : 'Authenticate';

  // const [formattedAccount, setFormattedAccount] = useState('Authenticate');

  // useEffect(() => {
  //   if (isAuthenticated && !account) {
  //     console.log(account, isAuthenticated);
  //     //setFormattedAccount(prettyAddress(account));
  //     refetchUserData();
  //   }
  // }, [account, isAuthenticated]);

  return (
    <div className="auth flex flex-row justify-end text-white pt-7 px-20 w-full">
      <Button text={buttonText} click={authenticate} />
    </div>
  );
};

export default Account;
