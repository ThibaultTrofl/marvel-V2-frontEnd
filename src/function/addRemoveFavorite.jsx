const addRemoveFavorite = ({ favorite, setFavorite, id }) => {
  let copyOfArray = favorite;
  if (favorite) {
    if (copyOfArray.includes(id)) {
      copyOfArray.pop(id);
    } else {
      copyOfArray.push(id);
    }
  } else {
    copyOfArray = favorite.push(id);
  }
  setFavorite(copyOfArray);
  localStorage.setItem("favorite", JSON.stringify([copyOfArray]));
};

export default addRemoveFavorite;
