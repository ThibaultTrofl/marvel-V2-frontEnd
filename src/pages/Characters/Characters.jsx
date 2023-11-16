import { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.scss";
import CardCharacters from "../../components/CardCharactersAndComics/CardCharactersAndComicsAndComics";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const navigate = useNavigate();

  const [charactersLoading, setCharactersLoading] = useState(true);
  const [charactersData, setCharactersData] = useState({});

  useEffect(() => {
    console.log(import.meta.env.VITE_URL_BACKEND);
    const fetchCharacters = async () => {
      try {
        {
          const { data } = await axios.get(
            `${import.meta.env.VITE_URL_BACKEND}/characters`
          );
          console.log(data);
          setCharactersData(data);
          setCharactersLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <>
      <main className="container">
        {charactersLoading && (
          <section className="main_container">Loading</section>
        )}

        {!charactersLoading && (
          <section className="main_container">
            <nav className="main_container-nav">Barre de navigation</nav>
            <div className="main_container-list">
              {charactersData.results.map((data) => {
                return (
                  <CardCharacters
                    key={data._id}
                    name={data.name}
                    img={data.thumbnail}
                    description={data.description}
                    destination={() => navigate(`/characters/${data._id}`)}
                  />
                );
              })}
            </div>
            <nav className="main_container-nav">Pagination</nav>
          </section>
        )}
      </main>
    </>
  );
};
export default Characters;
