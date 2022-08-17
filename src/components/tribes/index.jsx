import { nanoid } from "nanoid";
import data from "../Data/data.json";
import ReadOnlyRow from "../ReadOnlyRow/index.jsx";
import EditableRow from "../EditableRow/index.jsx";
import React, { useState, Fragment } from "react";
import './styles.css';

const App = () => {
      const [tribeInfos, settribeInfos] = useState (data);
      const [addFormData, setAddFormData] = useState({
        tribeName: "",
        departmentName: "",
        officeName: "",
        id2: "",
        description: "",
      });
    
      const [editFormData, setEditFormData] = useState({
        tribeName: "",
        departmentName: "",
        officeName: "",
        id2: "",
        description: "",
      });
    
      const [edittribeInfoId, setEdittribeInfoId] = useState(null);
    
      const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
      };
    
      const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
      };
    
      const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        const newtribeInfo = {
          id: nanoid(),
          tribeName: addFormData.tribeName,
          departmentName: addFormData.departmentName,
          officeName: addFormData.officeName,
          id2: addFormData.id2,
          description: addFormData.description,
        };
    
        const newtribeInfos = [...tribeInfos, newtribeInfo];
        settribeInfos(newtribeInfos);
      };
    
      const handleEditFormSubmit = (event) => {
        event.preventDefault();
    
        const editedtribeInfo = {
          id: edittribeInfoId,
          tribeName: editFormData.tribeName,
          departmentName: editFormData.departmentName,
          officeName: editFormData.officeName,
          id2: editFormData.id2,
          description: editFormData.description,
        };
    
        const newtribeInfos = [...tribeInfos];
    
        const index = tribeInfos.findIndex((tribeInfo) => tribeInfo.id === edittribeInfoId);
    
        newtribeInfos[index] = editedtribeInfo;
    
        settribeInfos(newtribeInfos);
        setEdittribeInfoId(null);
      };
    
      const handleEditClick = (event, tribeInfo) => {
        event.preventDefault();
        setEdittribeInfoId(tribeInfo.id);
    
        const formValues = {
          tribeName: tribeInfo.tribeName,
          departmentName: tribeInfo.departmentName,
          officeName: tribeInfo.officeName,
          id2: tribeInfo.id2,
          description: tribeInfo.description,
        };
    
        setEditFormData(formValues);
      };
    
      const handleCancelClick = () => {
        setEdittribeInfoId(null);
      };
    
      const handleDeleteClick = (tribeInfoId) => {
        const newtribeInfos = [...tribeInfos];
    
        const index = tribeInfos.findIndex((tribeInfo) => tribeInfo.id === tribeInfoId);
    
        newtribeInfos.splice(index, 1);
    
        settribeInfos(newtribeInfos);
      };
    
      return (
        <div className="table2 app-container border bg-dark p-4">
          <form onSubmit={handleEditFormSubmit}>
            <table className='table'>
              <thead>
                <tr className="whitey">
                  <th>Tribe</th>
                  <th>Department</th>
                  <th>Office</th>
                  <th>#</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tribeInfos.map((tribeInfo) => (
                  <Fragment>
                    {edittribeInfoId === tribeInfo.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        tribeInfo={tribeInfo}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
          <form class="table2" onSubmit={handleAddFormSubmit}>
            <input className="idr"
              type="text"
              name="tribeName"
              required="required"
              placeholder="Enter Tribe..."
              onChange={handleAddFormChange}
            />
            <input className="idr"
              type="text"
              name="departmentName"
              required="required"
              placeholder="Enter Department..."
              onChange={handleAddFormChange}
            />
            <input className="idr"
              type="text"
              name="officeName"
              required="required"
              placeholder="Enter Office..."
              onChange={handleAddFormChange}
            />
            <input className="idr2"
              type="text"
              name="id2"
              required="required"
              placeholder="Enter ID..."
              onChange={handleAddFormChange}
            />
                 <input className="idr"
              type="text"
              name="description"
              required="required"
              placeholder="Enter Description..."
              onChange={handleAddFormChange}
            />
            <button type="submit" class="btn btn-success suc1">+ Add Tribe</button>
          </form>
        </div>
      );
    };

    export default App;