import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent/index.jsx';
import FooterComponent from './components/footer/index.jsx';
import TribesComponent from './components/tribes/index.jsx';
import EmployeesComponent from './components/employees/index.jsx';
import EmployeesTitleComponent from './components/employeestitle/index.jsx';
import TribesTitleComponent from './components/Tribetitle/index.jsx';
import InfoModal from './components/Module-Popup/index.jsx';
import TableData from './components/form/form.jsx';

function App() {
  return (
    <div className='App'>
      <NavbarComponent /> <br/> <br/>
      <TribesTitleComponent /><br/><br/><br/>
      <TableData />
      <InfoModal /><br/><br/><br/><br/>
      <EmployeesTitleComponent /><br/><br/><br/><br/>
      <EmployeesComponent /><br/><br/>
      <FooterComponent />
    </div>
  );
}

export default App;
