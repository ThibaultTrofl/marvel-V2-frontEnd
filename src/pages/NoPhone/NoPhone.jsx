import "./NoPhone.scss";
import marvel from "../../assets/Marvel_logo.png";
const NoPhone = () => {
  return (
    <main className="NoPhone">
      <section className="NoPhone-container">
        <img src={marvel} alt="" className="NoPhone-container-img" />
        <p>
          Merci de consulter ce site sur un écran de plus de 540px de largeur
        </p>
      </section>
    </main>
  );
};

export default NoPhone;
