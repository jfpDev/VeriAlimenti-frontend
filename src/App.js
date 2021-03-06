// Import the libraries
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {BrowserHistoryWithEntries} from 'browser-history-with-entries';

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
    <Router history={BrowserHistoryWithEntries}>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/VeriAlimenti-frontend/'          exact component = {Home} />
          <Route path='/VeriAlimenti-frontend/galery'          component = {Galery} />
          <Route path='/VeriAlimenti-frontend/restaurant'      component = {Restaurant} />
          <Route path='/VeriAlimenti-frontend/root'      exact component = {Root} />
          <Route path='/VeriAlimenti-frontend/root/purchases'  component = {Purchases} />
          <Route path='/VeriAlimenti-frontend/root/sales'      component = {Sales} />
        </Switch>
        <FindUs/>
      </div>
    </Router>
  );
}

export default App;
