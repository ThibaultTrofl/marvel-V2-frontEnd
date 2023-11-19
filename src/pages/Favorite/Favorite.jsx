import { useEffect, useState } from "react";
import "./Favorite.scss";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import SearchBarGeneral from "../../components/SearchBarGeneral/SearchBarGeneral";
import CardCharactersAndComics from "../../components/CardCharactersAndComics/CardCharactersAndComics";
import { useNavigate } from "react-router-dom";

const Favorite = ({ favorite, setFavorite }) => {
  const navigate = useNavigate();

  const [favoriteLoading, setFavoriteLoading] = useState(true);
  const [favoriteDataCharacters, setFavoriteDataCharacters] = useState();
  const [favoriteDataComics, setFavoriteDataComics] = useState();

  useEffect(() => {
    const fetchFavorite = async () => {
      try {
        {
          const FetchCharacters = await axios.get(
            `${import.meta.env.VITE_URL_BACKEND}/characters`
          );
          const FetchComics = await axios.get(
            `${import.meta.env.VITE_URL_BACKEND}/search/comics`
          );
          setFavoriteDataCharacters(FetchCharacters.data);
          setFavoriteDataComics(FetchComics.data);
          setFavoriteLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFavorite();
  }, []);
  return (
    <main className="container">
      {favoriteLoading && (
        <section className="main_container">
          <Loading />
        </section>
      )}

      {!favoriteLoading && (
        <section className="main_container">
          <nav className="main_container-nav">
            <SearchBarGeneral />
          </nav>
          <div className="main_container-list">
            {favoriteDataCharacters.results.map((data) => {
              if (favorite.includes(data._id)) {
                return (
                  <CardCharactersAndComics
                    key={data._id}
                    id={data._id}
                    name={data.name}
                    img={data.thumbnail}
                    description={data.description}
                    favorite={favorite}
                    setFavorite={setFavorite}
                    destination={() => navigate(`/characters/${data._id}`)}
                  />
                );
              }
            })}
          </div>
          <div className="main_container-list">
            {favoriteDataComics.results.map((data) => {
              if (favorite.includes(data._id)) {
                return (
                  <CardCharactersAndComics
                    key={data._id}
                    id={data._id}
                    name={data.name}
                    img={data.thumbnail}
                    description={data.description}
                    favorite={favorite}
                    setFavorite={setFavorite}
                    destination={() => navigate(`/characters/${data._id}`)}
                  />
                );
              }
            })}
          </div>
        </section>
      )}
    </main>
  );
};

export default Favorite;
