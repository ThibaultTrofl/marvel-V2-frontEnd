import { useNavigate } from "react-router-dom";

// Import style
import "./Header.scss";
import marvelLogo from "../../assets/Marvel_Logo.png";

// Import component
import Button from "../../components/Button/Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="container header_container">
      <section className="header_container-section">
        <Button text="Favoris" func={() => navigate("/favorite")} />
      </section>
      <section className="header_container-section">
        <img
          onClick={() => navigate("/")}
          className="header_container-img"
          src={marvelLogo}
          alt="Logo Marvel couleur blanc majuscule sur fond rouge rectangulaire "
        />
      </section>
      <section className="header_container-section">
        <Button text="Personnage" func={() => navigate("/")} />
        <Button text="Comics" func={() => navigate("/comics")} />
      </section>
    </header>
  );
};

export default Header;
