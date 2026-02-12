import axios from "axios";
import { useEffect, useState } from "react";

export const FirstHttpRequest = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        // Code qui sera exécuté une fois la réponse reçu, uniquement si la requête est reussie
        console.log(response.data);
        setProducts(response.data);
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

  const loadProducts2 = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("requete terminée !");
    }
  };

  useEffect(() => {
    loadProducts();
    // loadProducts2();
  }, []);

  return (
    <>
      <h1>Ma 1ere requete HTTP</h1>

      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  );
};
