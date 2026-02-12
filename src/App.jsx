import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { QuickStart } from "./pages/QuickStart";

function App() {
  return (
    <>
      {/* Mettre tous les composants à l'intérieur de browser Router */}
      <BrowserRouter>
        <Routes>
          <Route path="" element={<h1>Page d'accueil</h1>} title="Accueil" />
          <Route
            path="courriers"
            element={<h1>courriers</h1>}
            title="courriers"
          />
          <Route
            path="quick-start"
            element={<QuickStart />}
            title="quick-start"
          />

          <Route path="*" element={<h1>NOT FOUND</h1>} title="not found" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
