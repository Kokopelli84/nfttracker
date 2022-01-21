import React, { ChangeEventHandler } from "react";

interface IProps {
  type: string,
  name: string,
  placeholder: string,
  handleChange: ChangeEventHandler<HTMLInputElement>,
  minLength: number,
  value: string | number,
  textColour: string,
}

const Input = ({
  type,
  name,
  placeholder,
  handleChange,
  minLength,
  value,
  textColour,
}: IProps) => (
    <input
      type={type || 'text'}
      value={value}
      name={name}
      id=""
      placeholder={placeholder}
      required
      onChange={handleChange}
      minLength={minLength}
      className={`mb-3 border-gray-300 border p-2 bg-transparent ${textColour || 'text-white'
        } rounded-lg`}
    />
  );

export default Input;
