import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";


function App() {
  const [inactive, setInactive] = useState(false);

  

  return (
    <div className="App">
      <Router>

      <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">CodingLab</span>
    </div>
      <ul className="nav-links">
        <li>
          <a href="/" className="active">
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name"><span className="lts">Dashboard</span></span>
          </a>
        </li>
 
        <li className="log_out">
          <a href="/logout">
            <i className='bx bx-log-out'></i>
            <span className="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>
<section  className="home-section">
<nav>

      <div class="search-box">
        <input type="text" placeholder="Search..."/>
        <i class='bx bx-search' ></i>
      </div>
      <div class="profile-details">
        <span class="admin_name">Prem Shahi</span>
        <i class='bx bx-chevron-down' ></i>
      </div>
    </nav>


    <div class="home-content">



    <div class="overview-boxes">
    <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Order</div>
            <div class="number">40,876</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bx-cart-alt cart'></i>
        </div>
      </div>     
    </div>
</section>


      </Router>
    </div>
  );
}

export default App;
