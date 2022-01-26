import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

type Props = {
  children: React.ReactNode;
};

const EnableWeb3 = ({ children }: Props) => {
  const { account, isAuthenticated, Moralis } = useMoralis();

  useEffect(() => {
    (async () => {
      if (isAuthenticated && !account) {
        await Moralis.enableWeb3();
      }
    })();
  }, [account, isAuthenticated, Moralis]);

  return <>{children}</>;
};

export default EnableWeb3;
