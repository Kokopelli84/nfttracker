import { FunctionComponent } from 'react'
import Success from '../status/success';

interface IProps {
  message: string,
  info: string,
  link: string,
  linkText: string
}

const SuccessMessage: FunctionComponent<IProps> = ({ message, info, link, linkText }) => {
  return (
    <div>
      <div className="flex justify-center">
        <Success />
      </div>
      <div>
        <div className="flex justify-center"></div>
        <h1 className="text-2xl text-center font-semibold mb-5">{message}</h1>
        <p className="text-center text-lg">
          {info}
          <a
            className="text-purple-700 font-semibold "
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {linkText}
          </a>
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage;
