const Input = ({
  type,
  name,
  placeholder,
  handleChange,
  minLength,
  value,
  textColour,
}) => {
  return (
    <input
      type={type || 'text'}
      value={value}
      name={name}
      id=""
      placeholder={placeholder}
      required
      onChange={handleChange}
      minLength={minLength}
      className={`mb-3 border-gray-300 border p-2 bg-transparent ${
        textColour || 'text-white'
      } rounded-lg`}
    />
  );
};

export default Input;
