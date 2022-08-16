import React from "react";

const ReadOnlyRow = ({ tribeInfo, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{tribeInfo.tribeName}</td>
      <td>{tribeInfo.departmentName}</td>
      <td>{tribeInfo.officeName}</td>
      <td>{tribeInfo.id2}</td>
      <td>{tribeInfo.description}</td>
      <td>
        <button
          type="button" class="btn btn-warning"
          onClick={(event) => handleEditClick(event, tribeInfo)}
        >
          Edit
        </button>
        <button type="button" class="btn btn-danger" onClick={() => handleDeleteClick(tribeInfo.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;