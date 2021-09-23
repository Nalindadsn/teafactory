import React, {  } from "react";
import { Link } from "react-router-dom";



const SideMenu = (props) => {


  

  return (
   
   <>
         <div className="sidebar">
    <div className="logo-details">
      <i className='bx bx-grid-alt'></i>
      <span className="logo_name">TEA</span>
    </div>
      <ul className="nav-links">
        <li>
          <Link  exact={true} activeClassName='is-active'  to='/'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name"><span className="lts">Dashboard</span></span></Link>
        </li>
        <li>
          <Link  exact={true} activeClassName='is-active'  to='/v'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name"><span className="lts">Dashboard</span></span></Link>
        </li>
 
        <li className="log_out">
          <a href="/logout">
            <i className='bx bx-log-out'></i>
            <span className="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>
   </>
  );
};

export default SideMenu;
