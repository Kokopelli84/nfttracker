import { FunctionComponent } from 'react'

interface IProps {
  action: string,
}

const AuthMessage: FunctionComponent<IProps> = ({ action }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-transparent border-2 border-gray-500 w-1/3 text-center rounded-lg py-10 h-fit text-white">
        <h1
          className="text-xl font-bold
      "
        >
          In order to {action}, please authenticate.
        </h1>
      </div>
    </div>
  );
};

export default AuthMessage;
