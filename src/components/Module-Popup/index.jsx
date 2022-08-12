import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import { useState } from 'react';
import './styles.css';


export default function InfoModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div class="col-lg-4 hello1">
        <div class="border bg-dark p-4 hello2">
      <Button className="nextButton yesyes" onClick={handleShow}>
        + Add Employee
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Employee Form</Modal.Title>
        </Modal.Header>
        <Modal.Body><label for="fname">
                    <br />
                    <p className="white">First Name:</p>
                  </label><br />
                  <input type="fname" id="fname" name="fname" value=""/><br/>

                  <label for="lname">
                    <br />
                    <p className="white">Last Name:</p>
                  </label><br/>
                  <input type="lname" id="lname" name="lname" value=""/><br/>

                  <label for="department">
                    <br />
                    <p className="white">Department:</p>
                  </label><br />
                  <input type="department" id="department" name="department" value=""/><br/><br/>


                  <p className="color:white">Select tribe:</p>
                  <select id="tribe" name="tribe">
                    <option value="tribe0"> </option>
                    <option value="tribe1">Internstellars</option>
                    <option value="tribe2">GhostBusters</option>
                    <option value="tribe3">Market Monsters</option>
                    <option value="Tribe4">PeoplePeople</option>
                  </select><br/><br/>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button class="buttonc" variant="primary" onClick={handleClose}>
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>
      </div></div>
    </>
  );
}
