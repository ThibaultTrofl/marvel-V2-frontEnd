import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Import style
import "./Characters.scss";

// Import component
import Loading from "../../components/Loading/Loading";
import CardCharactersAndComics from "../../components/CardCharactersAndComics/CardCharactersAndComics";
import Pagination from "../../components/Pagination/Pagination";
import SearchBarGeneral from "../../components/SearchBarGeneral/SearchBarGeneral";

// eslint-disable-next-line react/prop-types
const Characters = ({ favorite, setFavorite }) => {
  const navigate = useNavigate();

  const [charactersLoading, setCharactersLoading] = useState(true);
  const [charactersData, setCharactersData] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        {
          const { data } = await axios.get(
            `${import.meta.env.VITE_URL_BACKEND}/characters?page=${page}`
          );
          setCharactersData(data);
          setCharactersLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCharacters();
  }, [page]);

  return (
    <>
      <main className="container">
        {charactersLoading && (
          <section className="main_container">
            <Loading />
          </section>
        )}

        {!charactersLoading && (
          <section className="main_container">
            <nav className="main_container-nav">
              <SearchBarGeneral />
            </nav>
            <div className="main_container-list">
              {charactersData.results.map((data) => {
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
              })}
            </div>
            <nav className="main_container-nav">
              <Pagination
                position={page}
                setPosition={setPage}
                count={charactersData.count}
              />
            </nav>
          </section>
        )}
      </main>
    </>
  );
};
export default Characters;
