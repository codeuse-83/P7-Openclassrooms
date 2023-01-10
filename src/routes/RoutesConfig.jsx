// Logique de routage
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import About from "../pages/About";
import Error404 from "../pages/Error404";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
   
      <Route path="/about" element={<About />} />
      {/*path = « * » est pour toutes les autres adresses URL qui n'existent pas */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default RoutesConfig;
