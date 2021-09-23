import React, {  } from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.jpg";
import image from "../assets/sideBg.jpg";


const SideMenu = (props) => {


  

  return (
   
   <>

<div class="sidebar close">
    <div className="logo-details">
    <i class='bx bxs-institution'></i>

      
      <span class="logo_name">Tea</span>
    </div>
    <ul class="nav-links" style={{backgroundImage:`url(${image})`,backgroundSize:'cover'}}>
      <li>

        <Link to="/">
          <i class='bx bx-grid-alt' ></i>
          <span class="link_name">Dashboard </span>
        </Link>
      </li>
      <li>
        <div class="iocn-link">
          <Link to="/oop">
            <i class='bx bx-collection' ></i>
            <span class="link_name">Category</span>
          </Link>
          <i class='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul class="sub-menu">
          <li><Link class="link_name" to="/">Category</Link></li>
          <li><Link to="/">HTML & CSS</Link></li>
          <li><Link to="/">JavaScript</Link></li>
          <li><Link to="/">PHP & MySQL</Link></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <Link to="/">
            <i class='bx bx-book-alt' ></i>
            <span class="link_name">Posts</span>
          </Link>
          <i class='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul class="sub-menu">
          <li><Link class="link_name" to="/">Posts</Link></li>
          <li><Link to="/">Web Design</Link></li>
          <li><Link to="/">Login Form</Link></li>
          <li><Link to="/">Card Design</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/">
          <i class='bx bx-pie-chart-alt-2' ></i>
          <span class="link_name">Analytics</span>
        </Link>
        <ul class="sub-menu blank">
          <li><Link class="link_name" to="/">Analytics</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </Link>
        <ul class="sub-menu blank">
          <li><Link class="link_name" to="/">Chart</Link></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <Link to="/">
            <i class='bx bx-plug' ></i>
            <span class="link_name">Plugins</span>
          </Link>
          <i class='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul class="sub-menu">
          <li><Link class="link_name" to="/">Plugins</Link></li>
          <li><Link to="/">UI Face</Link></li>
          <li><Link to="/">Pigments</Link></li>
          <li><Link to="/">Box Icons</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/">
          <i class='bx bx-compass' ></i>
          <span class="link_name">Explore</span>
        </Link>
        <ul class="sub-menu blank">
          <li><Link class="link_name" to="/">Explore</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/">
          <i class='bx bx-history'></i>
          <span class="link_name">History</span>
        </Link>
        <ul class="sub-menu blank">
          <li><Link class="link_name" to="/">History</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/">
          <i class='bx bx-cog' ></i>
          <span class="link_name">Setting</span>
        </Link>
        <ul class="sub-menu blank">
          <li><Link class="link_name" to="/">Setting</Link></li>
        </ul>
      </li>
      <li>
    <div class="profile-details">
      <div class="profile-content">
        <img src={user} alt="user"/>
      </div>
      <div class="name-job">
        <div class="profile_name">Prem Shahi</div>
        <div class="job">Web Desginer</div>
      </div>
      <i class='bx bx-log-out' ></i>
    </div>
  </li>
</ul>
  </div>
   </>
  );
};

export default SideMenu;
