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
      {/* <a href="#" class="tooltip-right" data-tooltip="I’m the tooltip text.">Tooltip</a> */}
        <li>
          <Link  exact={true} activeClassName='is-active'  to='/'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name"><span className="lts">ප්‍රධාන පුවරුව</span></span></Link>
        </li>
        <li >
          <Link  exact={true} activeClassName='is-active'  to='/v'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">පාරිභෝගිකයන්<span className="lts">
            </span></span></Link>
        </li>
        <li >
          <Link  exact={true} activeClassName='is-active'  to='/v'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">සේවකයන්<span className="lts">
            </span></span></Link>
        </li>
        <li >
          <Link  exact={true} activeClassName='is-active'  to='/v'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">කර්මාන්ත ශාලාව<span className="lts">
            </span></span></Link>
        </li>
        <li >
          <Link  exact={true} activeClassName='is-active'  to='/v'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">	සැපයුම් කරුවන්<span className="lts">
            </span></span></Link>
        </li>
        <li >
          <Link  exact={true} activeClassName='is-active'  to='/v'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">	භාණ්ඩ<span className="lts">
            </span></span></Link>
        </li>
        <li >
          <Link  exact={true} activeClassName='is-active'  to='/v'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">	6.	බිල්පත්<span className="lts">
            </span></span></Link>
        </li>
        <li >
          <Link  exact={true} activeClassName='is-active'  to='/v'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">	ගිණුම්<span className="lts">
            </span></span></Link>
        </li>
        <li >
          <Link  exact={true} activeClassName='is-active'  to='/v'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">		වියදම් <span className="lts">
            </span></span></Link>
        </li>

        <li >
          <Link  exact={true} activeClassName='is-active'  to='/v'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">		වාර්තා <span className="lts">
            </span></span></Link>
        </li>

        <li >
          <Link  exact={true} activeClassName='is-active'  to='/v'>
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">		සැකසුම් <span className="lts">
            </span></span></Link>
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
