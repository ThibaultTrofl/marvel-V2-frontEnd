import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

// import components
import Header from "./pages/header/header";
import Footer from "./pages/Footer/Footer";
import Characters from "./pages/Characters/Characters";
import Comics from "./pages/Comics/Comics";
import SpecificCharacter from "./pages/SpecificCharacter/SpecificCharacter";

import Search from "./pages/Search/Search";

function App() {
  const [actualPage, setActualPage] = useState("characters");
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Characters
                setActualPage={setActualPage}
                actualPage={actualPage}
              />
            }
          />
          <Route
            path="/comics"
            element={
              <Comics setActualPage={setActualPage} actualPage={actualPage} />
            }
          />
          <Route
            path="/search?:name"
            element={
              <Search setActualPage={setActualPage} actualPage={actualPage} />
            }
          />
          <Route
            path="/characters/:id"
            element={
              <SpecificCharacter
                setActualPage={setActualPage}
                actualPage={actualPage}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
