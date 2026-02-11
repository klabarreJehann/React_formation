function ConditionalRender() {
  const isLoggedIn = true;

  let content;

  if (isLoggedIn) {
    content = <p>Utilisateur connecté</p>;
  } else {
    content = <p>Utilisateur non connecté</p>;
  }

  return (
    <>
      <h3>Exemple 1: </h3>
      {content}

      <h3>Exemple 2: </h3>
      <p>{isLoggedIn ? "Utilisateur connecté" : "Utilisateur non connecté"}</p>

      <h3>Exemple 3: (pas de 'else')</h3>
      <p>{isLoggedIn && "Utilisateur connecté"}</p>
    </>
  );
}

export default ConditionalRender;
