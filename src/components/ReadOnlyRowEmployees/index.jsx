import React from "react";

const ReadOnlyRowEmployees = ({ EmployeeInfo, handleEditClickEmployees, handleDeleteClickEmployees }) => {
  return (
    <tr>
      <td>{EmployeeInfo.firstName}</td>
      <td>{EmployeeInfo.lastName}</td>
      <td>{EmployeeInfo.occupation}</td>
      <td>{EmployeeInfo.tribe}</td>
      <td>
        {/* <button
        //   type="button" class="btn btn-warning"
        //   onClick={(event) => handleEditClickEmployees(event, EmployeeInfo)}
        // >
        //   Edit
        // </button> */}
        <button type="button" class="btn btn-danger" onClick={() => handleDeleteClickEmployees(EmployeeInfo.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRowEmployees;