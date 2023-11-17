import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

//import Style
import "./SearchBar.scss";

// eslint-disable-next-line react/prop-types
const SearchBar = () => {
  const { name } = useParams();
  console.log(name);
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState("");

  return (
    <div>
      <label htmlFor="searchbar">
        <input
          type="text"
          name="searchbar"
          onChange={(event) => setTextInput(event.target.value)}
          value={textInput}
        />
      </label>
      <button onClick={() => navigate(`/search?name=${textInput}`)}>
        Rechercher
      </button>
    </div>
  );
};
export default SearchBar;
