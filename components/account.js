import { useMoralis } from 'react-moralis';
import Button from './button';
import prettyAddress from '../helpers/prettyAddress';

const Account = () => {
  const { authenticate, account } = useMoralis();
  const formattedAccount = account && prettyAddress(account);
  const buttonText = account ? formattedAccount : 'Authenticate';

  return (
    <div className="auth flex flex-row justify-end text-white pt-7 px-10 w-full">
      <Button text={buttonText} click={authenticate} />
    </div>
  );
};

export default Account;
