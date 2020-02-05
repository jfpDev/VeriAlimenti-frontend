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
//",
// Import the style Sheet   /VeriAlimenti-frontend
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/'          exact component = {Home} />
          <Route path='/galery'          component = {Galery} />
          <Route path='/restaurant'      component = {Restaurant} />
          <Route path='/root'      exact component = {Root} />
          <Route path='/root/purchases'  component = {Purchases} />
          <Route path='/root/sales'      component = {Sales} />
        </Switch>
        <FindUs/>
      </div>
    </Router>
  );
}

export default App;
