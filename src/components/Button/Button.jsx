import "./Button.scss";

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
