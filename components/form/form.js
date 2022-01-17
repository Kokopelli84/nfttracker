const Form = ({ children, title, titleColour }) => {
  return (
    <div>
      <div className={`font-semibold mb-5 text-xl ${titleColour}`}>{title}</div>
      <form action="" className="flex flex-col">
        {children}
      </form>
    </div>
  );
};

export default Form;
