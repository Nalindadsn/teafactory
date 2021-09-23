import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import HomeScreen from "./screen/HomeScreen";
import SideMenu from "./components/SideMenu";

const Dashboard = () => <h1>Dashboard</h1>;
const Content = () => <h1>Content</h1>;
const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;
function App() {
  const [inactive, setInactive] = useState(false);

  

  return (
    <div className="App">
      <Router>

<SideMenu/>
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


      <div class="sales-boxes">
        <div class="recent-sales box">
{/* <div className="card">
test
</div> */}


<Switch>
            <Route exact path={"/"}>
              <HomeScreen />

            </Route>
            <Route exact path={"/content"}>
              <Content />
            </Route>
            <Route path={"/content/courses"}>
              <Courses />
            </Route>
            <Route path={"/content/videos"}>
              <Videos />
            </Route>
            <Route path={"/design"}>
              <Design />
            </Route>
            <Route exact path={"/content-2"}>
              <Content2 />
            </Route>
            <Route path={"/content-2/courses"}>
              <Courses2 />
            </Route>
            <Route path={"/content-2/videos"}>
              <Videos2 />
            </Route>
            <Route path={"/design-2"}>
              <Design2 />
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
