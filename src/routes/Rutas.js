import React from "react";
import { Routes, Route,} from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { NotFound } from "../components/notFound";

import Home from "../pages/inicio/Home";
import { Login } from "../pages/perfil/Login";

import TabladeServicio from "../pages/contenido/AdminServicios/TabladeServicio";
import EditarServicio from "../pages/contenido/AdminServicios/EditarServicio";

import AdminPersonas from "../pages/contenido/AdminPersonas/AdminPersonas";
import FormPersonas from "../pages/contenido/AdminPersonas/FormPersonas";

import {Registrar,} from "../pages";


import { useState, useEffect } from "react";

const loadingContainerStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "#fff",
};

export function Rutas() {
 const [timer, setTimer] = useState(1000);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimer(0);
    }, 3000);
    return () => clearTimeout(timerId);
  });

  if (timer > 0) {
    return (
      <div style={loadingContainerStyles}>
        <img
          src="/image/2.png"
          height="100%"
          width="100%"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    );
  }

  const loadLayouts = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>

      
      <Route path="/" element={loadLayouts(Layout, Login)} />
      <Route path="/Registr" element={loadLayouts(Layout, Registrar)} />

      <Route path="/Medus" element={loadLayouts(Layout, Home)} />
      <Route path='*' element={loadLayouts(Layout, NotFound)} />

      <Route path='/Tabla' element={loadLayouts(Layout, TabladeServicio)} />
      <Route path='/Editar/:id' element={loadLayouts(Layout, EditarServicio)} />

      <Route path='/TablaPersonas' element={loadLayouts(Layout, AdminPersonas)}/>
      <Route path='/EditarPersonas/:id' element={loadLayouts(Layout, FormPersonas)}/>
      
    </Routes>
  );
}
