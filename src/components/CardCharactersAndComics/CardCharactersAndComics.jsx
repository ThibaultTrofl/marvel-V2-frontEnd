import { useIntersectionObserver, useWindowSize } from "@uidotdev/usehooks";

// Import style
import "./CardCharactersAndComics.scss";
import noInformation from "../../assets/no_information.png";

// Import componenet
import Button from "../Button/Button.jsx";
import addRemoveFavorite from "../../function/addRemoveFavorite.jsx";
import { useEffect, useState } from "react";

const CardCharactersAndComics = ({
  name,
  img,
  description,
  destination,
  id,
  favorite,
  // eslint-disable-next-line react/prop-types
  setFavorite,
}) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "430px",
  });
  const size = useWindowSize();

  const [cardFavorite, setCardFavorite] = useState(false);

  let rightSpace = size.width - entry?.boundingClientRect.right;

  const getLimitRight = () => {
    rightSpace = size.width - entry?.boundingClientRect.right;
  };

  window.onresize = getLimitRight();

  const func = () => {
    if (destination) {
      destination();
    } else {
      null;
    }
  };

  useEffect(() => {
    if (!favorite) {
      return;
    } else if (favorite?.includes(id)) {
      setCardFavorite(true);
    }
  }, [favorite]);

  return (
    <>
      <article ref={ref} className="card_charactersandcomics_container">
        {rightSpace < 230 && (
          <h2
            className={
              "card_charactersandcomics_container-title-text-Right card_charactersandcomics_container-title"
            }
            style={{ right: `${rightSpace + 200}px` }}
          >
            {name}
          </h2>
        )}
        {rightSpace >= 230 && (
          <h2 className={"card_charactersandcomics_container-title"}>{name}</h2>
        )}
        <div className="card_charactersandcomics_container-article">
          {/* eslint-disable-next-line react/prop-types */}
          {!img.path.includes("image_not_available") ? (
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
              className="card_charactersandcomics_container-article-noimg"
            />
          )}
        </div>
        {rightSpace < 230 && (
          <div
            className={
              "card_charactersandcomics_container-description HoverRight"
            }
            style={{ right: `${rightSpace}px` }}
          >
            <p className="card_charactersandcomics_container-description-text">
              {description ||
                "Malheureusement, les données fournis par l'API ne possèdent pas de description. Si changement, cela sera modifié automatiquement."}
            </p>
            <Button text={"Voir plus"} card={true} func={() => func()} />
            {cardFavorite ? (
              <Button
                text={"Retirer des Favoris"}
                card={true}
                func={() => addRemoveFavorite({ favorite, setFavorite, id })}
              />
            ) : (
              <Button
                text={"Ajouter aux Favoris"}
                card={true}
                func={() => addRemoveFavorite({ favorite, setFavorite, id })}
              />
            )}
          </div>
        )}

        {rightSpace >= 230 && (
          <div
            className={
              "card_charactersandcomics_container-description HoverLeft "
            }
          >
            <p className="card_charactersandcomics_container-description-text">
              {description ||
                "Malheureusement, les données fournis par l'API ne possèdent pas de description. Si changement, cela sera modifié automatiquement."}
            </p>
            <Button text={"Voir plus"} card={true} func={() => func()} />
            {cardFavorite ? (
              <Button
                text={"Retirer des Favoris"}
                card={true}
                func={() => addRemoveFavorite({ favorite, setFavorite, id })}
              />
            ) : (
              <Button
                text={"Ajouter aux Favoris"}
                card={true}
                func={() => addRemoveFavorite({ favorite, setFavorite, id })}
              />
            )}
          </div>
        )}
      </article>
    </>
  );
};

export default CardCharactersAndComics;
