import React from "react";

  const EditableRowEmployees = ({
    editFormDataEmployees,
    handleEditFormChangeEmployees,
    handleCancelClickEmployees,
  }) => {
    return (
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter First Name..."
            name="firstName"
            value={editFormDataEmployees.firstName}
            onChange={handleEditFormChangeEmployees}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter Last Name..."
            name="lastName"
            value={editFormDataEmployees.lastName}
            onChange={handleEditFormChangeEmployees}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter Occupation..."
            name="occupation"
            value={editFormDataEmployees.occupation}
            onChange={handleEditFormChangeEmployees}
          ></input>
        </td>
        <td>
          <select id="tribe" name="tribe">
          <option value="tribe0"> </option>
          <option value="tribe1">Internstellars</option>
          <option value="tribe2">GhostBusters</option>
          <option value="tribe3">Market Monsters</option>
          <option value="Tribe4">PeoplePeople</option>
          </select><br/><br/>
            value={editFormDataEmployees.tribe}
            onChange={handleEditFormChangeEmployees}
        </td>
        <td>
          <button type="submit" class="btn btn-primary">Save</button>
          <button type="button" class="btn btn-secondary" onClick={handleCancelClickEmployees}>
            Cancel
          </button>
        </td>
      </tr>
    );
  };

  export default EditableRowEmployees;
