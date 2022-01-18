const Button = ({ text, click, classNames }) => {
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
