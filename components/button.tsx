import { FunctionComponent } from 'react'

interface IProps {
  text: string,
  click: () => void,
  classNames: string,
}

const Button: FunctionComponent<IProps> = ({ text, click, classNames }) => {
  return (
    <button
      className={
        'gradient p-3 rounded-md font-semibold text-white ' + classNames
      }
      onClick={() => click()}
    >
      {text}
    </button>
  );
};

export default Button;
