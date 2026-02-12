import { Button, HTMLTable } from "@blueprintjs/core";
import { useState } from "react";

export const Courriers = () => {
  const [apiResponse, setApiResponse] = useState({
    courriers: [
      {
        id: 79,
        reference: "2026-1078-436",
        objet: "Note de service interne",
        type: "interne",
        statut: { value: "recu", label: "Re\u00e7u", color: "secondary" },
        destinataire: "Direction \u00c9quipements",
        expediteur: "Tr\u00e9sor Public du Gabon",
        nature: "facture",
        dateReception: "2026-12-28 14:00:00",
        gestionnaire: "admin@gecat.ga",
        responsable: "M. Pierre Nziengui \u2013 Directeur G\u00e9n\u00e9ral",
      },
      {
        id: 1,
        reference: "2026-1000-204",
        objet: "Note de service interne",
        type: "sortant",
        statut: { value: "recu", label: "Re\u00e7u", color: "secondary" },
        destinataire: "Direction \u00c9quipements",
        expediteur: "Tr\u00e9sor Public du Gabon",
        nature: "invitation",
        dateReception: "2026-12-28 12:26:00",
        gestionnaire: "admin@gecat.ga",
        responsable: "Mme. Marie Obame \u2013 Directrice Financi\u00e8re",
      },
    ],
  });

  return (
    <>
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
    </>
  );
};
