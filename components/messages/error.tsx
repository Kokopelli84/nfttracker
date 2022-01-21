import { FunctionComponent } from 'react'
import Fail from '../status/error';

interface IProps {
  error: string,
}

const ErrorMessage: FunctionComponent<IProps> = ({ error }) => {
  return (
    <div>
      <div className="flex justify-center">
        <Fail />
      </div>
      <h1 className="text-2xl text-center font-semibold mb-5">
        Transaction Unsuccesful
      </h1>
      <p className="text-red-600 text-center">
        <span className="font-semibold">Error:</span> {error}
      </p>
    </div>
  );
};

export default ErrorMessage;
