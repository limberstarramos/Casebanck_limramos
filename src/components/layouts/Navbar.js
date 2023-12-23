import React,{ useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, BrowserRouter as Router,
  Switch,
  Outlet
   } from "react-router-dom";
// import { SidebarRuta } from ".SidebarRuta";
import style_layout from "../../styles/style_layout.css"
import { SidebarRuta } from "../routes/SidebarRuta";
import { IconContext } from "react-icons";
import logo from '../../assets/logo_tarjet.png'
const Navbar = () => {
  const [open, setOpen] = useState(true);
 
  const [sidebar, setSidebar] = useState(true); // antes false oculto

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{ color: "white" }}>
      <div className="navbar bg-ebony-950">
        <Link to="#" className="menu-bars">
        <img src={logo} className="w-[100px]" onClick={showSidebar}  />
        </Link>
        <h3 >Banco Crédito de Suisa</h3>
        {/* //onclickenevnt en li */}
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" > 
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars" onClick={showSidebar} >
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarRuta.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  </>
    
  );
};
export default Navbar;
