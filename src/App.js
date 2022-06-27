import React from 'react';
import './App.css';
import {Route , Routes} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CounterRedux from "./components/CounterRedux";
import EmployeesRedux from "./components/EmployeesRedux";

function App() {
  return (
    <React.Fragment>
      <NavBar/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/employees'} element={<EmployeesRedux/>}/>
          <Route path={'/counter'} element={<CounterRedux/>}/>
        </Routes>
    </React.Fragment>
  );
}

export default App;

//npm install bootstrap @fortawesome/fontawesome-free axios react-router-dom reasct-redux @reduxjs/toolkit