import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Import style
import "./Search.scss";

// Import component
import CardCharactersAndComics from "../../components/CardCharactersAndComics/CardCharactersAndComicsAndComics";
import Pagination from "../../components/Pagination/Pagination";

const Search = (setActualPage) => {
  const { name } = useParams();
  console.log(name);
  // const [searchLoading, setSearchLoading] = useState(true);
  // const [searchData, setSearchData] = useState({});
  // const [selectType, setSelectType] = useState({
  //   comics: false,
  //   characters: false,
  // });
  // const [page, setPage] = useState(1);
  // const [pageComics, setPageComics] = useState(1);
  // const [pageCharacters, setPageCharacters] = useState(1);

  // useEffect(() => {
  //   setActualPage("search");
  //   const fetchCharacters = async () => {
  //     try {
  //       if (
  //         (selectType.comics && selectType.characters) ||
  //         (!selectType.comics && !selectType.characters)
  //       ) {
  //         const { data } = await axios.get(
  //           `${
  //             import.meta.env.VITE_URL_BACKEND
  //           }/search?name=${name}&page=${page}`
  //         );
  //         setSearchData(data);
  //       } else if (selectType.comics && !selectType.characters) {
  //         const { data } = await axios.get(
  //           `${
  //             import.meta.env.VITE_URL_BACKEND
  //           }/search?name=${name}page=${page}&type=comics`
  //         );
  //         setSearchData(data);
  //       } else {
  //         const { data } = await axios.get(
  //           `${
  //             import.meta.env.VITE_URL_BACKEND
  //           }/search?name=${name}page=${page}&type=characters`
  //         );
  //         setSearchData(data);
  //       }
  //       setSearchLoading(false);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchCharacters();
  // }, [page, selectType]);

  return (
    <></>
    // <>
    //   <main className="container">
    //     {searchLoading && <section className="main_container">Loading</section>}

    //     {!searchLoading && selectType.comics && !selectType.characters && (
    //       <section className="main_container">
    //         <nav className="main_container-nav">Barre de navigation</nav>
    //         <div className="main_container-list">
    //           {searchData.results.map((data) => {
    //             return (
    //               <CardCharactersAndComics
    //                 key={data._id}
    //                 name={data.title}
    //                 img={data.thumbnail}
    //                 description={data.description}
    //               />
    //             );
    //           })}
    //         </div>
    //         <nav className="main_container-nav">
    //           <Pagination
    //             position={pageComics}
    //             setPosition={setPageComics}
    //             count={searchData.count}
    //           />
    //         </nav>
    //       </section>
    //     )}
    //     {!searchLoading && !selectType.comics && selectType.characters && (
    //       <section className="main_container">
    //         <nav className="main_container-nav">Barre de navigation</nav>
    //         <div className="main_container-list">
    //           {searchData.results.map((data) => {
    //             return (
    //               <CardCharactersAndComics
    //                 key={data._id}
    //                 name={data.title}
    //                 img={data.thumbnail}
    //                 description={data.description}
    //               />
    //             );
    //           })}
    //         </div>
    //         <nav className="main_container-nav">
    //           <Pagination
    //             position={pageCharacters}
    //             setPosition={setPageCharacters}
    //             count={searchData.count}
    //           />
    //         </nav>
    //       </section>
    //     )}
    //   </main>
    // </>
  );
};

export default Search;
