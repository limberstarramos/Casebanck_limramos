import React from "react";
import * as FaIcons from "react-icons/fa";
import { FaHome,FaShoppingCart  ,FaHandsHelping  } from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarRuta = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />    ,
    cName: "nav-text",
  },
  // {
  //   title: "Producto",
  //   path: "/producto",
  //   icon: <FaShoppingCart />,
  //   cName: "nav-text",
  // },

  // {
  //   title: "Soporte",
  //   path: "/soporte",
  //   icon: <FaHandsHelping />,
  //   cName: "nav-text",
  // },

  {
    title: "Solicitud de Tarjetas",
    path: "/solicitud-tarjetas",
    icon: <FaShoppingCart />,
    cName: "nav-text",
  },

  {
    title: "Tarjetas Solicitados",
    path: "/tarjetas-solicitadas",
    icon: <FaHandsHelping />,
    cName: "nav-text",
  },
  {
    title: "Tarjetas Aprobadas",
    path: "/tarjetas-aprobadas",
    icon: <FaHandsHelping />,
    cName: "nav-text",
  },

];
