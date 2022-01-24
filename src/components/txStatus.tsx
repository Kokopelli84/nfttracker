import React from 'react';
import { useAppSelector } from '@/state/hooks';
import FailMessage from './messages/error';
import PendingMessage from './messages/pending';
import SuccessMessage from './messages/success';

interface IProps {
  message: string;
  link: string;
  linkText: string;
  info?: string;
  children: JSX.Element;
}

const TxStatus = ({ message, link, linkText, info, children }: IProps) => {
  const { txStatus, response } = useAppSelector(state => state);

  if (txStatus === 'pending') {
    return <PendingMessage />;
  }
  if (txStatus === 'success') {
    return <SuccessMessage message={message} link={link} linkText={linkText} info={info} />;
  }
  if (txStatus === 'error') {
    return <FailMessage error={response} />;
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return children;
};

export default TxStatus;
