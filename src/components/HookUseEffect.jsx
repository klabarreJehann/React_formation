import { useEffect, useState } from "react";

function HookUseEffect() {
  const [count, setCount] = useState(0);

  // // Gestion d'effet secondaires (calcul de valeurs dérivées, appel de fonctions .... )
  useEffect(() => {
    document.title = "count: " + count;

    console.log("use effect déclenché !");

    // Très souvent, on utilisera le return dans les useEffect qui n'ont pas de dépendances
    return () => {
      console.log("return du useEffect qui a 'count' comme dépendance");
    };
  }, [count]);

  // // 'Protection' de code qu'on ne veut exécuter qu'au chargement du composant
  // Peut être utilisé pour charger des données après le chargement du composant (et donc déjà afficher quelque chose à l'utilisateur)
  useEffect(() => {
    // Avec un tableau de dépendance laissé vide, on s'assure que le code ne sera lancé qu'au chargement du composant
    console.log("composant chargé !");
  }, [count]);

  // // Pour déclencher des actions lors de la destruction d'un composant
  // // Le return est utilisé quand on laisse un tableau de dépendance vide
  useEffect(() => {
    return () => {
      console.log("Composant détruit !");
    };
  }, []);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      vous avez cliqué {count} fois
    </button>
  );
}

export default HookUseEffect;
