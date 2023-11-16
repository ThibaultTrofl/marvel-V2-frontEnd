import "./Button.scss";

// eslint-disable-next-line react/prop-types
const Button = ({ text, func }) => {
  return (
    <>
      <button onClick={() => func()} className="button_container">
        {text}
      </button>
    </>
  );
};

export default Button;
