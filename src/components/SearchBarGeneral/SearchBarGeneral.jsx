import { useState } from "react";
import { useNavigate } from "react-router-dom";

//import Style
import "./SearchBarGeneral.scss";
import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
const SearchBar = () => {
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState("");

  return (
    <div className="search_bar-container">
      <label htmlFor="searchbar">
        <input
          placeholder="Rechercher un comics ou un personnage"
          type="text"
          name="searchbar"
          onChange={(event) => setTextInput(event.target.value)}
          value={textInput}
          className="search_bar-container-input"
        />
      </label>
      <Button
        text="Rechercher"
        func={() => navigate(`/search?name=${textInput}`)}
      />
    </div>
  );
};
export default SearchBar;
