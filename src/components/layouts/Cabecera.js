import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../styles/style_layout.css";
import { IconContext } from "react-icons";

function Cabecera() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
     <div>
        <h3>Cabecera</h3>
     </div>
    </>
  );
}

export default Cabecera;
