import axios from "axios";
import { useEffect, useState } from "react";

export const FirstHttpRequest = () => {
  const [responseApi, setResponseApi] = useState({
    courriers: [],
    pagination: {},
    filters: {},
  });

  const loadMessages = () => {
    axios
      .get("/api/courriers")
      .then((response) => {
        // Code qui sera exécuté une fois la réponse reçu, uniquement si la requête est reussie
        console.log(response.data);
        setResponseApi(response.data);
      })
      .catch((error) => {
        // Code qui sera exécuté une fois la réponse reçu, uniquement si la requête est en erreur
        console.error(error);
      })
      .finally(() => {
        // Code qui sera exécuté une fois la réponse reçu, quelle que soit la situation
        console.log("requete terminée !");
      });
  };

  const loadMessages2 = async () => {
    try {
      const response = await axios.get("https://localhost:8000/api/courriers");
      console.log(response.data);
      setResponseApi(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("requete terminée !");
    }
  };

  useEffect(() => {
    loadMessages();
    // loadMessages2();
  }, []);

  return (
    <>
      <h1>Ma 1ere requete HTTP</h1>

      {responseApi.courriers.map((courrier) => (
        <p key={courrier.id}>{courrier.responsable}</p>
      ))}
    </>
  );
};
