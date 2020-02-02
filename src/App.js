// Import the libraries
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Import the components
import Header     from './components/ModuleComponents/Header/';
import Home       from './components/Home/';
import Galery     from './components/Galery/';
import Restaurant from './components/Restaurant';
import Root       from './components/Root/';
import Purchases  from './components/Root/Purchases/';
import Sales      from './components/Root/Sales/';
import FindUs     from './components/ModuleComponents/FindUs/';
import NavAll     from './components/ModuleComponents/Nav/NavAll/';

// Import the style Sheet
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='https://jfpdev.github.io/VeriAlimenti-frontend/'          exact component = {Home} />
          <Route path='https://jfpdev.github.io/VeriAlimenti-frontend/galery'          component = {Galery} />
          <Route path='https://jfpdev.github.io/VeriAlimenti-frontend/restaurant'      component = {Restaurant} />
          <Route path='https://jfpdev.github.io/VeriAlimenti-frontend/root'      exact component = {Root} />
          <Route path='https://jfpdev.github.io/VeriAlimenti-frontend/root/purchases'  component = {Purchases} />
          <Route path='https://jfpdev.github.io/VeriAlimenti-frontend/root/sales'      component = {Sales} />
        </Switch>
        <FindUs/>
      </div>
    </Router>
  );
}

export default App;
