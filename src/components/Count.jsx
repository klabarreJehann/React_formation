import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  console.log("Recalcul !");

  function handleIncrement() {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      compteur : {count}
      <br />
      {/* compteur 2 : {count2} */}
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}

export default Count;
