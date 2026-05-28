import { Routes, Route } from "react-router-dom";

import ClientLayout from "./layouts/ClientLayout";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import TroceoPage from "./pages/TroceoPage";
import ProductPage from "./pages/ProductPage";
import MayoristasPage from "./pages/MayoristasPage";
import SucursalesPage from "./pages/SucursalesPage";

function App() {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<CatalogPage />} />
        <Route path="/productos/:seccion/:producto" element={<ProductPage />} />
        <Route path="/troceos/:troceo" element={<TroceoPage />} />
        <Route path="/mayoristas" element={<MayoristasPage />} />
        <Route path="/sucursales" element={<SucursalesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
