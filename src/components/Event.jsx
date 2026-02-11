function Event() {
  function handleClick() {
    alert("Vous avez cliqué !");
  }

  function handleClickWithParam(text) {
    alert(text);
  }

  function handleInputChange(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => alert("2e click")}>2e click</button>

      <p>Appel d'une fonction avec paramètre sur un évènement :</p>
      <button onClick={() => handleClickWithParam("mon texte")}>
        3e click
      </button>

      <input type="text" onChange={handleInputChange} />
    </>
  );
}

export default Event;
