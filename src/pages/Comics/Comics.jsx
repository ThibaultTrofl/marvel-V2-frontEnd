import { useEffect, useState } from "react";
import axios from "axios";
import "./Comics.scss";
import CardCharactersAndComics from "../../components/CardCharactersAndComics/CardCharactersAndComicsAndComics";

const Comics = () => {
  const [comicsLoading, setComicsLoading] = useState(true);
  const [comicsData, setComicsData] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        {
          const { data } = await axios.get("http://localhost:3000/comics");
          console.log(data);
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
                console.log(data);
                return (
                  <>
                    <CardCharactersAndComics
                      key={data._id}
                      name={data.title}
                      img={data.thumbnail}
                      description={data.description}
                    />
                  </>
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
