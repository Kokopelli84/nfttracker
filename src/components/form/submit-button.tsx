import React from 'react';

interface IProps {
  disabled?: boolean;
  action: string;
}

const SubmitButton = ({ disabled, action }: IProps) => (
  <button
    type="submit"
    className="w-fit self-end gradient text-white px-5 py-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-md"
    disabled={disabled}>
    {action}
  </button>
);

export default SubmitButton;
