import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import PendingMessage from './messages/pending';
import SuccessMessage from './messages/success';
import FailMessage from './messages/error';

interface IProps {
  message: string,
  link: string,
  linkText: string,
  info?: string,
  children: ReactNode
}

const TxStatus = ({ message, link, linkText, info, children }: IProps) => {
  const { txStatus, response } = useSelector((state) => state);

  if (txStatus === 'pending') {
    return <PendingMessage />;
  } if (txStatus === 'success') {
    return (
      <SuccessMessage
        message={message}
        link={link}
        linkText={linkText}
        info={info}
      />
    );
  } if (txStatus === 'error') {
    return <FailMessage error={response} />;
  }
    return <>{children}</>;

};

export default TxStatus;
