const Error = () => {
  return (
    <svg
      className="crossmark addClass animateElement"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle
        className="crossmark__circle addClass animateElement"
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
      <path
        className="cross__path cross__path--right addClass animateElement"
        fill="none"
        d="M16,16 l20,20"
      />
      <path
        className="cross__path cross__path--left addClass animateElement"
        fill="none"
        d="M16,36 l20,-20"
      />
    </svg>
  );
};

export default Error;
