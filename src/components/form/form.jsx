import React, { useState } from 'react';
import TableForm from '../table/table.jsx';
import jsonData from './data.json';
import './styles.css';

function TableData() {
const [tableData, setTableData] = useState(jsonData);

const tableRows = tableData.map((info) => {
	return (
	<tr>
		<td>{info.id}</td>
		<td>{info.tribe}</td>
		<td>{info.department}</td>
        <td>{info.office}</td>
        <td>{info.id2}</td>
        <td>{info.description}</td>
	</tr>
	);
});

const addRows = (data) => {
	const totalTribes = tableData.length;
	data.id = totalTribes + 1;
	const updatedTableData = [...tableData];
	updatedTableData.push(data);
	setTableData(updatedTableData);
};

return (
	<div>
			<div className="d-flex flex-column column">
      <div className="center-block fix-width scroll-inner">
        <table className="table table-dark table-striped">
		<thead>
		<tr>
			<th>#</th>
			<th>Tribe</th>
			<th>Department</th>
            <th>Office</th>
            <th>#</th>
            <th>Description</th>
		</tr>
		</thead>
		<tbody>{tableRows}</tbody>
	</table>
	<TableForm func={addRows} />
	</div></div></div>
);
}

export default TableData;
