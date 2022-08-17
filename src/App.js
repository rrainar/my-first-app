import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavbarComponent from './components/NavbarComponent/index.jsx';
import FooterComponent from './components/footer/index.jsx';
import App from './components/tribes/index.jsx';
import EmployeesNewCards from './components/newEmployee/index.jsx';
import EmployeesTitleComponent from './components/employeestitle/index.jsx';
import TribesTitleComponent from './components/Tribetitle/index.jsx';
import InfoModal from './components/Module-Popup/index.jsx';
import Home from './pages/home';
// import Layout from "./pages/layout";
import Tribes from "./pages/tribes";
import Employees from "./pages/employees";
//  

function MyApp() {
  return (

    <div className='MyApp'>
      <BrowserRouter>
      <NavbarComponent />

      <Routes>
          <Route index element={<Home />} />
          <Route path="tribes" element={<Tribes />} />
          <Route path="employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
    <FooterComponent /> 
      {/* <NavbarComponent /> <br/> <br/> */}
      {/* <TribesTitleComponent /><br/><br/><br/>
      <App />
      <InfoModal /><br/><br/><br/><br/>
      <EmployeesTitleComponent /><br/><br/><br/><br/>
      <EmployeesNewCards /><br/><br/>
      {/* <Apperki /><br/><br/> */}
      {/* <FooterComponent /> */} 
    </div>
  );
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
export default MyApp;
