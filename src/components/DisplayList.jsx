function DisplayList() {
  const names = ["Riri", "Fifi", "Loulou"];

  const persons = [
    { id: 1, name: "Riri", age: "5" },
    { id: 2, name: "Fifi", age: "4" },
    { id: 3, name: "Loulou", age: "3" },
  ];

  return (
    <>
      <ul>
        {names.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
      <div>
        {persons.map((p) => (
          <div key={p.id}>
            <p>Nom: {p.name}</p>
            <p>age: {p.age}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DisplayList;
