import React from "react";

  const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
  }) => {
    return (
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter Tribe..."
            name="tribeName"
            value={editFormData.tribeName}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter Department..."
            name="departmentName"
            value={editFormData.departmentName}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter Office..."
            name="officeName"
            value={editFormData.officeName}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter ID..."
            name="id2"
            value={editFormData.id2}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter Description..."
            name="description"
            value={editFormData.description}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <button type="submit" class="btn btn-primary">Save</button>
          <button type="button" class="btn btn-secondary" onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
    );
  };

  export default EditableRow;
