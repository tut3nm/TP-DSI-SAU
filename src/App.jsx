import React from "react";
import { Routes, Route } from "react-router-dom";

import Inicio from "./componentes/Inicio";
import BecasEstudiante from "./componentes/BecasEstudiante";
import IniciarSesionEmpresa from "./componentes/IniciarSesionEmpresa";
import IniciarSesionEstudiante from "./componentes/IniciarSesionEstudiante";
import PasantiasEmpresa from "./componentes/PasantiasEmpresa";
import PasantiasEstudiante from "./componentes/PasantiasEstudiante";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/becas-estudiante" element={<BecasEstudiante />} />
      <Route path="/iniciar-sesion-empresa" element={<IniciarSesionEmpresa />} />
      <Route path="/iniciar-sesion-estudiante" element={<IniciarSesionEstudiante />} />
      <Route path="/pasantias-empresa" element={<PasantiasEmpresa />} />
      <Route path="/pasantias-estudiante" element={<PasantiasEstudiante />} />
    </Routes>
  );
}

export default App;
