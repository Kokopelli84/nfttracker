import React from 'react'

interface IProps {
  text: string | null,
  click: () => void,
  classNames?: string,
}

const Button = ({ text, click, classNames }: IProps) => (
    <button
      className={
        `gradient p-3 rounded-md font-semibold text-white ${classNames}`
      }
      onClick={() => click()}
      type="button"
    >
      {text}
    </button>
  );

export default Button;
