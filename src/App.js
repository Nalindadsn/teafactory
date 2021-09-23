import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screen/HomeScreen";
import SideMenu from "./components/SideMenu";

function App() {

  return (
    <div className="App">
      <Router>
<SideMenu/>
  <section class="home-section">
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand">Navbar</span>
      <input type="search" className="form-control" placeholder="search..." style={{width:"40%",float:"left" }}/>
    <div class="d-flex">
    <div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"  style={{width:"40%",float:"" }}>
    Nalinda Dissanayaka
  </button>

</div>
    </div>
  </div>
</nav>


    <div className="tst">
<div className="">
  <div className="">
    oo

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
