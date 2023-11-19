import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Import style
import "./SpecificCharacter.scss";

// Import component
import Loading from "../../components/Loading/Loading";
import CardSpecificCharacter from "../../components/CardSpecificCharacter/CardSpecificCharacter";

const SpecificCharacter = () => {
  const { id } = useParams();

  const [specificCharactersLoading, setSpecificCharactersLoading] =
    useState(true);
  const [specificCharactersData, setSpecificCharactersData] = useState({});

  useEffect(() => {
    const fetchSpecificCharacter = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL_BACKEND}/characters/${id}`
        );
        setSpecificCharactersData(data);
        setSpecificCharactersLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSpecificCharacter();
  }, []);

  return (
    <main className="container">
      {specificCharactersLoading && (
        <section className="main_container">
          <Loading />
        </section>
      )}
      {!specificCharactersLoading && (
        <section className="main_container">
          <CardSpecificCharacter data={specificCharactersData} />
        </section>
      )}
    </main>
  );
};

export default SpecificCharacter;
