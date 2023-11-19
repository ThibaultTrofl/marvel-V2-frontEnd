//import Style
import "../SearchBarGeneral/SearchBarGeneral.scss";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ setName, name }) => {
  const handleChangeInput = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  return (
    <label htmlFor="searchbar" className="search_bar-container">
      <input
        className="search_bar-container-input"
        type="text"
        onChange={(event) => handleChangeInput(event)}
        value={name}
        name="searchbar"
      />
    </label>
  );
};
export default SearchBar;
