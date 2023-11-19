// Import style
import "./Button.scss";

// eslint-disable-next-line react/prop-types
const Button = ({ text, func, card }) => {
  return (
    <>
      <button
        onClick={() => func()}
        className={card ? "button_container  width" : "button_container"}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
