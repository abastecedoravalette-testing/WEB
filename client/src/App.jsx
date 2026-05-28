import { Routes, Route } from "react-router-dom";

import ClientLayout from "./layouts/ClientLayout";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import TroceoPage from "./pages/TroceoPage";
import CutPage from "./pages/CutPage";
import MayoristasPage from "./pages/MayoristasPage";

function App() {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cortes" element={<CatalogPage />} />
        <Route path="/cortes/:seccion/:corte" element={<CutPage />} />
        <Route path="/troceos/:troceo" element={<TroceoPage />} />
        <Route path="/mayorista" element={<MayoristasPage />} />
      </Route>
    </Routes>
  );
}

export default App;
