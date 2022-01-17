import { useSelector } from 'react-redux';
import PendingMessage from './messages/pending';
import SuccessMessage from './messages/success';
import FailMessage from './messages/error';

const TxStatus = ({ message, link, linkText, info, children }) => {
  const { txStatus, response } = useSelector((state) => state);

  if (txStatus === 'pending') {
    return <PendingMessage />;
  } else if (txStatus === 'success') {
    return (
      <SuccessMessage
        message={message}
        link={link}
        linkText={linkText}
        info={info}
      />
    );
  } else if (txStatus === 'error') {
    return <FailMessage error={response} />;
  } else {
    return children;
  }
};

export default TxStatus;
