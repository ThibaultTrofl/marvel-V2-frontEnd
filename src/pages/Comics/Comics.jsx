import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Comics.scss";

import CardCharactersAndComics from "../../components/CardCharactersAndComics/CardCharactersAndComicsAndComics";

const Comics = () => {
  const navigate = useNavigate();
  console.log(window.pageXOffset);
  const [comicsLoading, setComicsLoading] = useState(true);
  const [comicsData, setComicsData] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        {
          const { data } = await axios.get(
            `${import.meta.env.VITE_URL_BACKEND}/comics`
          );
          setComicsData(data);
          setComicsLoading(false);
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
        {comicsLoading && <section className="main_container">Loading</section>}

        {!comicsLoading && (
          <section className="main_container">
            <nav className="main_container-nav">Barre de navigation</nav>
            <div className="main_container-list">
              {comicsData.results.map((data) => {
                return (
                  <CardCharactersAndComics
                    key={data._id}
                    name={data.title}
                    img={data.thumbnail}
                    description={data.description}
                    destination={() => navigate(`/comics/${data._id}`)}
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
export default Comics;
