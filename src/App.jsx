import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

// import components
import Header from "./pages/header/header";
import Footer from "./pages/Footer/Footer";
import Characters from "./pages/Characters/Characters";
import Comics from "./pages/Comics/Comics";
import SpecificComics from "./pages/SpecificComic/SpecificComic";
import SpecificCharacter from "./pages/SpecificCharacter/SpecificCharacter";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:id" element={<SpecificComics />} />
          <Route path="/characters/:id" element={<SpecificCharacter />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
