import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import { MyRoute } from './components/MyRoute/MyRoute';
import { Dashboard } from './components/Dashboard/Dashboard';
import './App.css';

const NavBar = () => (
  <div className="navbar">
    <Link to="/">Dashboard</Link>
    <Link to="/profile">Minha Rota</Link>
  </div>
);

const Tab = ({children}) => (
    <div>
      <NavBar />
      {children}
    </div>
);

const Firsttab = () => (
  <Tab>
    <Dashboard />
  </Tab>
);

const SecondTab = () => (
  <Tab>
    <MyRoute />
  </Tab>
);

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Firsttab} />
          <Route path="/profile" component={SecondTab} />
        </Router>
      </div>
    );
  }
}
export default App;
