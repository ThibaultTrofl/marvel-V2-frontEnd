import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
import "./App.scss";

// import components
import NoPhone from "./pages/NoPhone/NoPhone";
import Header from "./pages/header/header";
import Footer from "./pages/Footer/Footer";
import Characters from "./pages/Characters/Characters";
import Comics from "./pages/Comics/Comics";
import SpecificCharacter from "./pages/SpecificCharacter/SpecificCharacter";
import Search from "./pages/Search/Search";
import Favorite from "./pages/Favorite/Favorite";

function App() {
  const size = useWindowSize();

  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("favorite");
    if (getLocalStorage) {
      const firstPartClean = getLocalStorage.replaceAll(`[`, "");
      const secondPartClean = firstPartClean.replaceAll(`]`, "");
      const thirdPartClean = secondPartClean.replaceAll(`"`, "");
      const localStorageClean = thirdPartClean.split(",");
      setFavorite(localStorageClean);
    }
  }, []);
  return (
    <>
      <Router>
        {size.width < 540 && <NoPhone />}
        {size.width > 540 && (
          <>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <Characters setFavorite={setFavorite} favorite={favorite} />
                }
              />
              <Route
                path="/comics"
                element={
                  <Comics setFavorite={setFavorite} favorite={favorite} />
                }
              />
              <Route
                path="/search"
                element={
                  <Search setFavorite={setFavorite} favorite={favorite} />
                }
              />
              <Route path="/characters/:id" element={<SpecificCharacter />} />
              <Route
                path="/favorite"
                element={
                  <Favorite setFavorite={setFavorite} favorite={favorite} />
                }
              />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
