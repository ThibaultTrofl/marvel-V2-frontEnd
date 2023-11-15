import { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.scss";
import CardCharacters from "../../components/CardCharactersAndComics/CardCharactersAndComicsAndComics";

const Characters = () => {
  const [charactersLoading, setCharactersLoading] = useState(true);
  const [charactersData, setCharactersData] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        {
          const { data } = await axios.get("http://localhost:3000/characters");
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
                console.log(data);
                return (
                  <>
                    <CardCharacters
                      key={data._id}
                      name={data.name}
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
export default Characters;
