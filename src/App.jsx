import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { QuickStart } from "./pages/QuickStart";

// A Ajouter pour utiliser blueprintJs (il faut faire les install avec npm)
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Navbar } from "./components/Navbar";
import { FirstHttpRequest } from "./pages/FirstHttpRequest";
import { Courriers } from "./pages/WithApiSymfony/Courriers";

function App() {
  return (
    <>
      {/* Mettre tous les composants à l'intérieur de browser Router */}
      <BrowserRouter>
        <Navbar className="navbar" />
        <Routes>
          <Route path="" element={<h1>Page d'accueil</h1>} title="Accueil" />
          <Route
            path="quick-start"
            element={<QuickStart />}
            title="quick-start"
          />
          <Route
            path="requete-http"
            element={<FirstHttpRequest />}
            title="Ma 1ere requete HTTP"
          />
          <Route path="courriers" element={<Courriers />} title="courriers" />

          {/* // Page 404 */}
          <Route path="*" element={<h1>NOT FOUND</h1>} title="not found" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
