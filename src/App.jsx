import "./App.css";
import ConditionalRender from "./components/ConditionalRender";
import Count from "./components/Count";
import DisplayList from "./components/DisplayList";
import Event from "./components/Event";
import MyButton from "./components/MyButton";
import SharingData from "./components/SharingData";

function App() {
  const title = "React !";
  const title2 = <h1 className="title">React !</h1>;

  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  return (
    <>
      <h1 className="title">{title}</h1>

      {title2}

      <p style={{ color: "red", fontSize: "20px" }}>Bienvenue sur notre site</p>
      <ul>
        <li>{user.firstName}</li>
        <li>{user.lastName}</li>
      </ul>
      <MyButton />

      <h2>Exemple d'un rendu conditionnel</h2>
      <ConditionalRender />

      <h2>Affichage d'une liste</h2>
      <DisplayList />

      <h2>Utilisation des évènements</h2>
      <Event />

      <h2>Compteur (utilisation de useState() )</h2>
      <Count />

      <h2>Partage de données entre composants</h2>
      <SharingData />
    </>
  );
}

export default App;
