const Button = ({ text, click }) => {
  return (
    <button
      className="gradient p-3 rounded-md font-semibold text-white"
      onClick={() => click()}
    >
      {text}
    </button>
  );
};

export default Button;
