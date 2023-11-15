import "./CardCharactersAndComics.scss";
import noInformation from "../../assets/no_information.png";

// eslint-disable-next-line react/prop-types
const CardCharactersAndComics = ({ name, img, description, destination }) => {
  return (
    <>
      <article
        className="card_charactersandcomics_container"
        onClick={() => {
          destination();
        }}
      >
        <h1 className="card_charactersandcomics_container-title">{name}</h1>
        <div className="card_charactersandcomics_container-article">
          {img ? (
            <img
              // eslint-disable-next-line react/prop-types
              src={`${img.path}/standard_xlarge.${img.extension}`}
              alt={name}
              className="card_charactersandcomics_container-article-img"
            />
          ) : (
            <img
              src={noInformation}
              alt="Image non disponible"
              className="card_charactersandcomics_container-article-img"
            />
          )}
          <p className="card_charactersandcomics_container-article-description">
            {description}
          </p>
        </div>
      </article>
    </>
  );
};

export default CardCharactersAndComics;
