import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import style
import "./Search.scss";
import comics from "../../assets/comics.png";
import characters from "../../assets/characters.jpg";
import both from "../../assets/both.png";

// Import component
import Loading from "../../components/Loading/Loading";
import CardCharactersAndComics from "../../components/CardCharactersAndComics/CardCharactersAndComics";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const [name, setName] = useState(searchParams.get("name"));
  const [searchLoading, setSearchLoading] = useState(true);
  const [countLoading, setCountLoading] = useState(true);
  const [searchData, setSearchData] = useState({});
  const [selectType, setSelectType] = useState(undefined);
  const [pageComics, setPageComics] = useState(1);
  const [pageCharacters, setPageCharacters] = useState(1);

  useEffect(() => {
    if (!selectType) {
      setSearchLoading(true);
    }

    const fetchSearch = async () => {
      try {
        if (selectType === undefined) {
          const { data } = await axios.get(
            `${import.meta.env.VITE_URL_BACKEND}/search/count?name=${name}`
          );
          if (data.total === 0) {
            setSelectType("null");
            setCountLoading(false);
          } else if (data.total === data.comics) {
            setSelectType("comics");
            setCountLoading(false);
          } else if (data.total === data.characters) {
            setSelectType("characters");
            setCountLoading(false);
          } else {
            setSearchData(data);
            setCountLoading(false);
          }
        } else if (selectType === "comics") {
          const { data } = await axios.get(
            `${
              import.meta.env.VITE_URL_BACKEND
            }/search/comics?name=${name}&page=${pageComics}`
          );
          setSearchData(data);
          setSearchLoading(false);
        } else if (selectType === "characters") {
          const { data } = await axios.get(
            `${
              import.meta.env.VITE_URL_BACKEND
            }/search/characters?name=${name}&page=${pageCharacters}`
          );
          setSearchData(data);
          setSearchLoading(false);
        } else if (selectType === "both") {
          const { data } = await axios.get(
            `${import.meta.env.VITE_URL_BACKEND}/search?name=${name}`
          );
          if (data.count === 0) {
            setSelectType("null");
          } else {
            setSearchData(data);
          }

          setSearchLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchSearch();
  }, [pageComics, pageCharacters, selectType, name]);

  return (
    <>
      <main className="container">
        <section className="main_container">
          {countLoading && (
            <section className="main_container">
              <Loading />
            </section>
          )}
          {selectType === undefined && !countLoading && (
            <div className="searchbar_container_empty">
              <button
                className="searchbar_container_empty-button"
                onClick={() => {
                  setSelectType("characters");
                }}
              >
                <img
                  src={characters}
                  alt=""
                  className="searchbar_container_empty-button-img"
                />
                <p className="searchbar_container_empty-button-text">
                  Personnages
                </p>
              </button>
              <button
                className="searchbar_container_empty-button"
                onClick={() => {
                  setSelectType("comics");
                }}
              >
                <img
                  src={comics}
                  alt=""
                  className="searchbar_container_empty-button-img"
                />
                <p className="searchbar_container_empty-button-text">Comics</p>
              </button>
              <button
                className="searchbar_container_empty-button"
                onClick={() => {
                  setSelectType("both");
                }}
              >
                <img
                  src={both}
                  alt=""
                  className="searchbar_container_empty-button-img"
                />
                <p className="searchbar_container_empty-button-text">
                  Les deux
                </p>
              </button>
            </div>
          )}

          {selectType === "null" && !countLoading && (
            <>
              <nav className="main_container-nav">
                <SearchBar setName={setName} name={name} />
              </nav>
              <div className="count_null">
                <p className="count_null-text">
                  {
                    "La recherche ne permet pas de retrouver de comics ou de personnages, merci d'essayer avec un autre nom."
                  }
                </p>
              </div>
            </>
          )}

          {!searchLoading && selectType === "characters" && (
            <>
              <nav className="main_container-nav">
                <SearchBar setName={setName} name={name} />
              </nav>
              <h1>Personnages</h1>
              <div className="main_container-list">
                {searchData.results.map((data) => {
                  return (
                    <CardCharactersAndComics
                      key={data._id}
                      name={data.name}
                      img={data.thumbnail}
                      description={data.description}
                      destination={() => navigate(`/characters/${data._id}`)}
                    />
                  );
                })}
              </div>
              <nav className="main_container-nav">
                <Pagination
                  position={pageCharacters}
                  setPosition={setPageCharacters}
                  count={searchData.count}
                />
              </nav>
            </>
          )}
          {!searchLoading && selectType === "comics" && (
            <>
              <nav className="main_container-nav">
                <SearchBar setName={setName} name={name} />
              </nav>
              <h1>Comics</h1>
              <div className="main_container-list">
                {searchData.results.map((data) => {
                  return (
                    <CardCharactersAndComics
                      key={data._id}
                      name={data.title}
                      img={data.thumbnail}
                      description={data.description}
                      destination={null}
                    />
                  );
                })}
              </div>
              <nav className="main_container-nav">
                <Pagination
                  position={pageComics}
                  setPosition={setPageComics}
                  count={searchData.count}
                />
              </nav>
            </>
          )}
          {!searchLoading && selectType === "both" && (
            <>
              <nav className="main_container-nav">
                <SearchBar setName={setName} name={name} />
              </nav>
              <h1>Personnages & Comics</h1>
              <div className="main_container-list">
                {searchData.concatArray.map((data) => {
                  return (
                    <CardCharactersAndComics
                      key={data._id}
                      name={data?.title || data?.name}
                      img={data.thumbnail}
                      description={data.description}
                    />
                  );
                })}
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Search;
