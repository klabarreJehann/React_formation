import MyButton from "../components/MyButton";
import ConditionalRender from "../components/ConditionalRender";
import DisplayList from "../components/DisplayList";
import Event from "../components/Event";
import Count from "../components/Count";
import HookUseEffect from "../components/HookUseEffect";
import Form from "";
import SharingData from "../components/SharingData";
import Exercice from "../components/Exercices/Exercice";

export const QuickStart = () => {
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

      <h2>Formulaire / inputs</h2>
      <Form />

      <h2>Exercice</h2>
      <Exercice />

      <h2>Use Effect</h2>
      <HookUseEffect />
    </>
  );
};
