import { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");

  const [checkBoxValue, setCheckBoxValue] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // On peut déclencher des actions (requêtes vers un serveur backend, trie de données côté front ....)
  };

  return (
    <div>
      <h3>Les champs auto-contrôlés</h3>
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <p>contenu de l'input: {inputValue}</p>

      <input
        type="checkbox"
        value={checkBoxValue}
        onChange={(e) => setCheckBoxValue(e.target.checked)}
      />
      <p>{checkBoxValue ? "case cochée" : "case non-cochée"}</p>
      <p>{checkBoxValue && "case cochée"}</p>
    </div>
  );
}

export default Form;
