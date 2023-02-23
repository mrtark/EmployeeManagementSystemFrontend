import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import EmployeeHome from './component/empcrud/EmployeeHome';
import EmployeeList from './component/empcrud/EmployeeList';
import EmployeeCreate from './component/empcrud/EmployeeCreate';
import EmployeeDetail from './component/empcrud/EmployeeDetail';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header icon="fa-brands fa-gg-circle"/>
        <Switch>
          <Route path="/" exact component={EmployeeHome}></Route>
          <Route path="/employee-list" component={EmployeeList}></Route>
          <Route path="/employee-create/:id" component={EmployeeCreate}></Route>
          <Route path="/employee-detail/:id" component={EmployeeDetail}></Route>
        </Switch>
        <Footer iconf="fab fa-github"/>
      </Router>
    </React.Fragment>
  );
}

export default App;
