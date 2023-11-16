import "./CardSpecificCharacter.scss";
import noInformation from "../../assets/no_information.png";
import CardCharactersAndComics from "../CardCharactersAndComics/CardCharactersAndComicsAndComics";

// eslint-disable-next-line react/prop-types
const CardSpecificCharacter = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { thumbnail, name, description } = data;
  return (
    <>
      <nav className="main_container-nav">Barre de navigation</nav>
      <article className="card_specific_characters_container">
        <div className="card_specific_characters_container-information">
          {/* eslint-disable-next-line react/prop-types */}
          {!thumbnail.path.includes("image_not_available") ? (
            <img
              // eslint-disable-next-line react/prop-types
              src={`${thumbnail.path}/standard_amazing.${thumbnail.extension}`}
              alt={name}
              className="card_specific_characters_container-information-img"
            />
          ) : (
            <img
              src={noInformation}
              alt="Image non disponible"
              className="card_specific_characters_container-information-img"
            />
          )}
          <div className="card_specific_characters_container-information-text">
            <h1 className="card_specific_characters_container-information-text-title">
              {name}
            </h1>
            <p className="card_specific_characters_container-information-text-description">
              {description}
            </p>
          </div>
        </div>
        <div className="main_container-list">
          {/* eslint-disable-next-line react/prop-types */}
          {data.comics.map((data) => {
            return (
              <CardCharactersAndComics
                key={data._id}
                name={data.title}
                img={data.thumbnail}
                description={data.description}
                // destination={() => navigate(`/comics/${data._id}`)}
              />
            );
          })}
        </div>
      </article>
    </>
  );
};

export default CardSpecificCharacter;
