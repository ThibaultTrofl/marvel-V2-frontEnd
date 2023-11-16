import "./CardCharactersAndComics.scss";
import noInformation from "../../assets/no_information.png";
import { useIntersectionObserver, useWindowSize } from "@uidotdev/usehooks";
// import Button from "../Button/Button.jsx";

// eslint-disable-next-line react/prop-types
const CardCharactersAndComics = ({ name, img, description, destination }) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "430px",
  });
  const size = useWindowSize();

  // const withScreen = () => {
  //   if (size.width < 1280) {
  //     return size.width;
  //   } else {
  //     return 1280;
  //   }
  // };
  let rightSpace = size.width - entry?.boundingClientRect.right;
  // console.log(withScreen(), name);
  // console.log({
  //   total: size.width,
  //   limit: entry?.boundingClientRect.right,
  //   calc: rightSpace,
  //   name,
  // });

  const getLimitRight = () => {
    rightSpace = size.width - entry?.boundingClientRect.right;
  };

  window.onresize = getLimitRight();

  return (
    <>
      <article
        ref={ref}
        className="card_charactersandcomics_container"
        onClick={() => destination()}
      >
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
              className="card_charactersandcomics_container-article-img"
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
            {/* <Button text={"Voir plus"} /> */}
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
            {/* <Button text={"Voir plus"} /> */}
          </div>
        )}
      </article>
    </>
  );
};

export default CardCharactersAndComics;
