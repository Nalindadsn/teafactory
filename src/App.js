import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screen/HomeScreen";
import SideMenu from "./components/SideMenu";
import { useState } from "react";
import SigninScreen from "./screen/SigninScreen";

function App() {

  const [signIn] = useState(false);
  return (
    <div className="App">

      <Router>
<SideMenu/>
  <section className="home-section">
{signIn===true?(
  
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand">TEA FACTORY {signIn}</span>
    <div className="d-flex "  style={{textAlign:"right" }}>
      
      <input type="search" className="form-control" placeholder="search..." style={{width:"100%" }}/>
      {/* <button type="button" className="btn btn-secondary dropdown-toggle"  style={{width:"40%",float:"right" }}>
        Nalinda Dissanayaka
      </button> */}

    </div>
    <div className="d-flex "  style={{textAlign:"right" }}>
      
      Nalinda Dissanayaka
    </div>
  </div>
</nav>

):(

<span></span>
)}


    <div>


      <Switch>
            <Route exact path={"/"}>
              <HomeScreen />

            </Route>
            <Route exact path={"/signin"}>
              <SigninScreen />

            </Route>
          </Switch>


    </div>
  </section>


      </Router>
    </div>
  );
}

export default App;
