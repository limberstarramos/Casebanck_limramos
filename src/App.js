import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import logo from "./logo.svg";
// import './App.css';
import Navbar from "./components/layouts/Navbar";
import Cabecera from "./components/layouts/Cabecera";
import Home from "./views/client/Home";
import Producto from "./views/client/producto/page";
import ProductoNuevo from "./views/client/producto/nuevo";
import ProductoEdit from "./views/client/producto/edit";
import PageNotFound from "./views/client/PageNotFound";

import SolicitudTarjeta from "./views/client/tarjeta/SolicitudTarjeta"
import TarjetaSolicitada from "./views/client/tarjeta/TarjetaSolicitada";
import TarjetaAprobada from "./views/client/tarjeta/TarjetaAprobada";

// erick.subieta@integgre.com  
function App() {
  return (
    //   <Cabecera/>
    <div className="App">
      <Router>
        <Navbar />

        <div className="h-screen flex justify-center ">
          <div className="container contenedor_main" >
            <Routes>
              <Route exact path="/" element={<Home />} />
              
              <Route exact path="/solicitud-tarjetas" element={<SolicitudTarjeta />} />
              <Route exact path="/tarjetas-solicitadas" element={<TarjetaSolicitada />} />
              <Route exact path="/tarjetas-aprobadas" element={<TarjetaAprobada />} />
              <Route exact path="/producto" element={<Producto />} />
              <Route exact path="/producto-nuevo" element={<ProductoNuevo />} />
              <Route exact path="/producto-edit" element={<ProductoEdit />} />
              <Route component={PageNotFound} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
