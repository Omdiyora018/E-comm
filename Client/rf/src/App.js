// import logo from './logo.svg';
import React from "react";

import './App.css';
// import RegistrationForm from './RegistrationForm';
import Reg from "./comp/Reg";
// import Login from "./comp/Login";
import './comp/Reg.css'
import RegistrationForm from "./RegistrationForm";
import Calc from "./comp/Calc";
import { BrowserRouter,Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<RegistrationForm/>}/>
      <Route path='/calc' element={<Calc/>}/>


      </Routes>
      </BrowserRouter>
      
      {/* <RegistrationForm /> */}
      <Reg />
      {/* <Login/> */}
    </div>
  );
}

export default App;
