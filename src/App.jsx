import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { AppContext } from "./AppContext";
import RoutesConfig from "./routes/RoutesConfig";
import dataJson from "./data/logements.json";

const App = () => {
  const [data, setData] = useState([]);

  // Capturer et stocker des données
  useEffect(() => {
    const fetchData = async () => {
      setData(dataJson);
    };
    fetchData();
  }, []);

  return (
    // Configuration du routeur
    <HashRouter>
      {/* Partage de données avec d'autres composants et pages à l'aide de useContext*/}
      <AppContext.Provider value={data}>
        <RoutesConfig />
      </AppContext.Provider>
    </HashRouter>
  );
};

export default App;
