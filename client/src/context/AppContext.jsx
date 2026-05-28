// client/src/context/AppContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Inicio", to: "/" },
    { label: "Catálogo", to: "/productos" },
    { label: "Troceos", to: "/troceos" },
    { label: "Sucursales", to: "/sucursales" },
    { label: "Mayoristas", to: "/mayoristas" },
  ];

  return (
    <AppContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        navigate,
        showSidebar,
        setShowSidebar,
        navLinks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
