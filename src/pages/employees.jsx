import React from "react";
import EmployeesTitleComponent from "../components/employeestitle/index";
import EmployeesNewCards  from "../components/newEmployee/index";
import InfoModal from "../components/Module-Popup/index";
import Apperki  from "../components/employeesForm/index";
export default function Employees() {
  return (
    <>
      <br/> <br/> <EmployeesTitleComponent /> <br/> <br/> <br/> <br/>
      <Apperki  />
    </>
  );
}