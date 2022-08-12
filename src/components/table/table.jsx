import React, { useState } from 'react';
import './styles.css';

function TableForm(props) {
const [tribe, setTribe] = useState('');
const [department, setDepartment] = useState('');
const [office, setOffice] = useState('');
const [id2, setId2] = useState('');
const [description, setDescription] = useState('');

const changeTribe = (event) => {
	setTribe(event.target.value);
};

const changeDepartment = (event) => {
	setDepartment(event.target.value);
};

const changeOffice = (event) => {
	setOffice(event.target.value);
};

const changeId2 = (event) => {
	setId2(event.target.value);
};

const changeDescription = (event) => {
	setDescription(event.target.value);
};

const transferValue = (event) => {
	event.preventDefault();
	const val = {
	tribe,
	department,
    office,
    id2,
    description
	};
	props.func(val);
	clearState();
};

const clearState = () => {
	setTribe('');
	setDepartment('');
    setOffice('');
    setId2('');
    setDescription('');
};

return (
	<div class="border bg-dark p-4">
	<div>
	<label><p className="thisisit">Tribe:  </p></label>
	<input type="text" className='marginRight' value={tribe} onChange={changeTribe} />
	<label><p className="thisisit">Department: </p></label>
	<input type="text" className='marginRight' value={department} onChange={changeDepartment} />
    <label><p className="thisisit">Office:  </p></label>
	<input type="text"className='marginRight' value={office} onChange={changeOffice} />
    <label><p className="thisisit">Desc ID:  </p></label>
    <input type="text" className='marginRight' value={id2} onChange={changeId2} />
    <label><p className="thisisit">Description:  </p></label>
	<input type="text" className='marginRight' value={description}onChange={changeDescription} />
	<button class="btn btn-success" onClick={transferValue}> + Add Tribe</button>
	<button type="button" class="btn btn-warning"> - Delete Tribe</button>
	</div></div>
);
}

export default TableForm;
