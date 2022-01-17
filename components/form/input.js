const Input = ({ type, name, placeholder, handleChange, minLength }) => {
  return (
    <input
      type={type || 'text'}
      name={name}
      id=""
      placeholder={placeholder}
      required
      onChange={handleChange}
      minLength={minLength}
      className="mb-3 border-gray-300 border p-2 bg-transparent text-white rounded-lg"
    />
  );
};

export default Input;
