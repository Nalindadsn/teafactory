import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screen/HomeScreen";
import SideMenu from "./components/SideMenu";

function App() {

  return (
    <div className="App">

      <Router>
<SideMenu/>
  <section className="home-section">
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand">TEA FACTORY</span>
    <div className="d-flex text-right">
      <input type="search" className="form-control" placeholder="search..." style={{width:"50%",float:"left" }}/>
    <div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"  style={{width:"40%",float:"" }}>
    Nalinda Dissanayaka
  </button>

</div>
    </div>
  </div>
</nav>


    <div>


      <Switch>
            <Route exact path={"/"}>
              <HomeScreen />

            </Route>
          </Switch>


    </div>
  </section>


      </Router>
    </div>
  );
}

export default App;
