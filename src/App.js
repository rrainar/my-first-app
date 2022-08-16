import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent/index.jsx';
import FooterComponent from './components/footer/index.jsx';
import App from './components/tribes/index.jsx';
// import EmployeesNewCards from './components/newEmployee/index.jsx';
import EmployeesTitleComponent from './components/employeestitle/index.jsx';
import TribesTitleComponent from './components/Tribetitle/index.jsx';
// import InfoModal from './components/Module-Popup/index.jsx';
import Apper from './components/employeesForm/index.jsx';

function MyApp() {
  return (
    <div className='MyApp'>
      <NavbarComponent /> <br/> <br/>
      <TribesTitleComponent /><br/><br/><br/>
      <App />
      {/* <InfoModal /><br/><br/><br/><br/> */}
      <EmployeesTitleComponent /><br/><br/><br/><br/>
      {/* <EmployeesNewCards /><br/><br/> */}
      <Apper /><br/><br/>
      <FooterComponent />
    </div>
  );
}

export default MyApp;
