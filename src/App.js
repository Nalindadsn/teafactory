import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screen/HomeScreen";
import SideMenu from "./components/SideMenu";

function App() {

  return (
    <div className="App">
      <Router>

<SideMenu/>
<section  className="home-section">
<nav>

      <div className="search-box">
        <input type="text" placeholder="Search..."/>
        <i className='bx bx-search' ></i>
      </div>
      <div className="profile-details">
        <span className="admin_name">test</span>
        <i className='bx bx-chevron-down' ></i>
      </div>
    </nav>


    <div className="home-content">



    <div className="overview-boxes">
    <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Order</div>
            <div className="number">40,876</div>
            <div className="indicator">
              <i className='bx bx-up-arrow-alt'></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className='bx bx-cart-alt cart'></i>
        </div>
      </div> 


      <div className="row">
        <div className="col-md-12">

{/* <div className="card">
test
</div> */}


<Switch>
            <Route exact path={"/"}>
              <HomeScreen />
            </Route>
          </Switch>
          


        </div>
      </div>

      
          
    </div>
</section>


      </Router>
    </div>
  );
}

export default App;
