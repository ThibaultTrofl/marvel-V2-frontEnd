import { useEffect, useState } from "react";
import axios from "axios";

// Import style
import "./Comics.scss";

// Import component
import CardCharactersAndComics from "../../components/CardCharactersAndComics/CardCharactersAndComicsAndComics";
import Pagination from "../../components/Pagination/Pagination";

const Comics = (setActualPage) => {
  const [comicsLoading, setComicsLoading] = useState(true);
  const [comicsData, setComicsData] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    setActualPage("comics");
    const fetchCharacters = async () => {
      try {
        {
          const { data } = await axios.get(
            `${import.meta.env.VITE_URL_BACKEND}/comics?page=${page}`
          );
          setComicsData(data);
          setComicsLoading(false);
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
                  />
                );
              })}
            </div>
            <nav className="main_container-nav">
              <Pagination
                position={page}
                setPosition={setPage}
                count={comicsData.count}
              />
            </nav>
          </section>
        )}
      </main>
    </>
  );
};
export default Comics;
