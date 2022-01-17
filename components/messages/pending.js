import Pending from '../status/pending';

const PendingMessage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Pending />
      </div>
      <div>
        <h1 className="text-2xl text-center font-semibold mb-5">
          Transaction Pending...
        </h1>
        <p className="e text-center">
          You can wait to see the transaction hash or view in MetaMask later.
        </p>
      </div>
    </div>
  );
};

export default PendingMessage;
