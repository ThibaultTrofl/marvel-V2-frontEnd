import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//import Style
import "./SearchBar.scss";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ actualPage }) => {
  const navigate = useNavigate;
  const [textInput, setTextInput] = useState("");

  const handleChangeInput = (event) => {
    event.preventDefault();
    setTextInput(event.target.value);
  };

  useEffect(() => {
    if (actualPage === "search") {
      setTimeout(navigate(`/search?name=${textInput}`), "2000");
    }
  }, [textInput]);

  return (
    <div>
      <label htmlFor="">
        <input
          type="text"
          onChange={(event) => handleChangeInput(event)}
          value={textInput}
        />
        (
        <button onClick={() => navigate(`/search?name=${textInput}`)}>
          Rechercher
        </button>
        )
      </label>
      {actualPage === "search" && (
        <div>
          <button>Comics</button> <button>Characters</button>
        </div>
      )}
    </div>
  );
};
export default SearchBar;
