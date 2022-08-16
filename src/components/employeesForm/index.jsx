import { nanoid } from "nanoid";
import EmployeesNewCards from "../newEmployee/index.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReadOnlyRowEmployees from "../ReadOnlyRowEmployees/index.jsx";
import EditableRowEmployees from "../EditableRowEmployees/index.jsx";
import React, { useState, Fragment } from "react";
import { Modal, Button } from "react";
import './styles.css';


const Apper = () => {
      const [EmployeesInfos, setEmployeesInfos] = useState (EmployeesNewCards);
      const [addFormDataEmployees, setAddFormDataEmployees] = useState({
        image:"https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
        firstName: "",
        lastName: "",
        occupation: "",
        tribe: "",
      });
    
      const [editFormDataEmployees, setEditFormDataEmployees] = useState({
        image:"https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
        firstName: "",
        lastName: "",
        occupation: "",
        tribe: "",
      });
    
      const [editEmployeesInfoId, setEditEmployeesInfoId] = useState(null);
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      const handleAddFormChangeEmployees = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormDataEmployees };
        newFormData[fieldName] = fieldValue;
    
        setAddFormDataEmployees(newFormData);
      };
    
      const handleEditFormChangeEmployees = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormDataEmployees };
        newFormData[fieldName] = fieldValue;
    
        setEditFormDataEmployees(newFormData);
      };
    
      const handleAddFormSubmitEmployees = (event) => {
        event.preventDefault();
    
        const newEmployeesInfo = {
          id: nanoid(),
          firstName: addFormDataEmployees.firstName,
          lastName: addFormDataEmployees.lastName,
          occupation: addFormDataEmployees.occupation,
          tribe: addFormDataEmployees.tribe,
        };
    
        const newEmployeesInfos = [...EmployeesInfos, newEmployeesInfo];
        setEmployeesInfos(newEmployeesInfos);
      };
    
      const handleEditFormSubmitEmployees = (event) => {
        event.preventDefault();
    
        const editedEmployeesInfo = {
          id: editEmployeesInfoId,
          firstName: editFormDataEmployees.firstName,
          lastName: editFormDataEmployees.lastName,
          occupation: editFormDataEmployees.occupation,
          tribe: editFormDataEmployees.tribe,
        };
    
        const newEmployeesInfos = [...EmployeesInfos];
    
        const index = EmployeesInfos.findIndex((EmployeesInfo) => EmployeesInfo.id === editEmployeesInfoId);
    
        newEmployeesInfos[index] = editedEmployeesInfo;
    
        setEmployeesInfos(newEmployeesInfos);
        setEditEmployeesInfoId(null);
      };
    
      const handleEditClickEmployees = (event, EmployeesInfo) => {
        event.preventDefault();
        setEditEmployeesInfoId(EmployeesInfo.id);
    
        const formValues = {
          firstName: EmployeesInfo.firstName,
          lastName: EmployeesInfo.lastName,
          occupation: EmployeesInfo.occupation,
          tribe: EmployeesInfo.tribe,
        };
    
        setEditFormDataEmployees(formValues);
      };
    
      const handleCancelClickEmployees = () => {
        setEditEmployeesInfoId(null);
      };
    
      const handleDeleteClickEmployees = (EmployeesInfoId) => {
        const newEmployeesInfos = [...EmployeesInfos];
    
        const index = EmployeesInfos.findIndex((EmployeesInfo) => EmployeesInfo.id === EmployeesInfoId);
    
        newEmployeesInfos.splice(index, 1);
    
        setEmployeesInfos(newEmployeesInfos);
      };
    
        return (
            
            <div class="col-lg-4 hello1">
              <div class="border bg-dark p-4 hello2">
            <Button className="nextButton yesyes" onClick={handleShow}>
              + Add Employee
            </Button> </div>
      
          <form onSubmit={handleEditFormSubmitEmployees}>
            <table className='table'>
              <thead>
                <tr className="whitey">
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Occupation</th>
                  <th>Tribe</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {EmployeesInfos.map((EmployeesInfo) => (
                  <Fragment>
                    {editEmployeesInfoId === EmployeesInfo.id ? (
                      <EditableRowEmployees
                        editFormData={editFormDataEmployees}
                        handleEditFormChange={handleEditFormChangeEmployees}
                        handleCancelClick={handleCancelClickEmployees}
                      />
                    ) : (
                      <ReadOnlyRowEmployees
                        EmployeesInfo={EmployeesInfo}
                        handleEditClick={handleEditClickEmployees}
                        handleDeleteClick={handleDeleteClickEmployees}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
          <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Employee Form</Modal.Title>
        </Modal.Header>
        <Modal.Body onSubmit={handleAddFormSubmitEmployees}>
          <input className="idr5" id="firstName"
              type="text"
              name="firstName"
              required="required"
              placeholder="Enter First Name..."
              onChange={handleAddFormChangeEmployees}
            />
              <input className="idr5" id="lastName"
              type="text"
              name="lastName"
              required="required"
              placeholder="Enter Last Name..."
              onChange={handleAddFormChangeEmployees}
            />
              <input className="idr5" id="occupation"
              type="text"
              name="occupation"
              required="required"
              placeholder="Enter occupation..."
              onChange={handleAddFormChangeEmployees}
            />
              
                    
                    <select value="" id="tribe" name="tribe" onChange={handleAddFormChangeEmployees}>
                    <option value="tribe0"> </option>
                    <option value="tribe1">Internstellars</option>
                    <option value="tribe2">GhostBusters</option>
                    <option value="tribe3">Market Monsters</option>
                    <option value="Tribe4">PeoplePeople</option>
                  </select>

           </Modal.Body>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
            <Button type="submit" class="btn btn-success suc9">+ Add Employees</Button>
            </Modal.Footer>
            </Modal>
        </div>
      
      );
    };
    
    

    export default Apper;