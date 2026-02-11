function SharingData() {
  const users = [
    { id: 1, name: "John", lastName: "Doe" },
    { id: 2, name: "Jane", lastName: "Doe" },
    { id: 3, name: "Jojo", lastName: "Doe" },
  ];

  function handleaddUser() {
    alert("Ajout d'un utilisateur");
  }

  return (
    <>
      <DisplayData
        userName="John"
        usersTable={users}
        handleClickfct={handleaddUser}
        action="Ajouter"
      />
      <MyTitle children="Mon titre"></MyTitle>
      <MyTitle>Mon titre passé ici</MyTitle>
    </>
  );
}

function DisplayData({ userName, usersTable, handleClickfct, action }) {
  return (
    <>
      <h3>Je suis le composant enfant (DisplayData)</h3>
      <p>{userName}</p>

      {usersTable.map((u) => (
        <ul key={u.id}>
          <li>id: {u.id}</li>
          <li>name: {u.name}</li>
          <li>lastName: {u.lastName}</li>
        </ul>
      ))}

      {usersTable
        .filter((u) => u.name === "Jane")
        .map((u) => (
          <ul key={u.id}>
            <li>id: {u.id}</li>
            <li>name: {u.name}</li>
            <li>lastName: {u.lastName}</li>
          </ul>
        ))}

      <button onClick={handleClickfct}>{action}</button>
    </>
  );
}

function MyTitle({ children }) {
  return <h1>{children}</h1>;
}

export default SharingData;
