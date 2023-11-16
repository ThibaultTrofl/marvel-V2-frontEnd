import marvelLogo from "../../assets/Marvel_Logo.png";
import Button from "../../components/Button/Button";
import "./Header.scss";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="container header_container">
      <section className="header_container-section">
        <Button text="Compte" />
        <Button text="Favoris" />
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