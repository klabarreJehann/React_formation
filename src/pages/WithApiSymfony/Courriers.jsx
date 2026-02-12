import { Button, HTMLTable } from "@blueprintjs/core";
import axios from "axios";
import { useEffect, useState } from "react";

export const Courriers = () => {
  const [apiResponse, setApiResponse] = useState({});
  const [inError, setInError] = useState(false);

  const [error, setError] = useState({});

  const loadCouriers = () => {
    axios
      .get("/api/courriers/dzokkd")
      .then((response) => {
        setError({});
        setInError(true);
        setApiResponse(response.data);
      })
      .catch((error) => {
        setInError(true);
        setError(error);
        console.log(error);
      });
  };

  useEffect(() => {
    loadCouriers();
  }, []);

  return (
    <>
      {apiResponse.courriers ? (
        <HTMLTable>
          <caption>Courriers</caption>
          <thead>
            <tr>
              <th>Référence</th>
              <th>Objet</th>
              <th>Type</th>
              <th>Statut</th>
              <th>Destinataire</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {apiResponse.courriers.map((courrier) => (
              <tr key={courrier.id}>
                <td>{courrier.reference}</td>
                <td>{courrier.objet}</td>
                <td>{courrier.type}</td>
                <td>
                  {courrier.statut.value} (améliorer en utilisant les infos de
                  style)
                </td>
                <td>{courrier.destinataire}</td>
                <td>
                  <Button>Voir</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </HTMLTable>
      ) : inError ? (
        <>
          <p>Une erreur est survenue</p>
          <p>{error.message}</p>
        </>
      ) : (
        <p>Chargements en cours .....</p>
      )}
    </>
  );
};
