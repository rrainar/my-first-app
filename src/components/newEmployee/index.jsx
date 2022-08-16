import React from "react";
import "./styles.css";
import { Card } from "react-bootstrap";

const EmployeesNewCards = () => {
  const employeeInfo = [
    {
      id: 1,
      image: "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
      firstName: "Zohaib",
      lastName: "Zohaib",
      occupation: "Fullstack",
      tribe: "Internstellar",
    },
    {
      id: 2,
      image:
        "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
        firstName: "Mike",
        lastName: "Zohaib",
        occupation: "Backend",
        tribe: "Internstellar",
    },
    {  
      id: 3,
      image:
        "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
        firstName: "Annabel",
        lastName: "Zohaib",
        occupation: "Intern",
        tribe: "Internstellar",
    },
    {  
        id: 4,
        image:
          "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
          firstName: "Maxim",
          lastName: "Zohaib",
          occupation: "Intern",
          tribe: "Internstellar",
      },
      {  
        id: 5,
        image:
          "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
          firstName: "Rainar",
          lastName: "Zohaib",
          occupation: "Intern",
          tribe: "Internstellar",
      },
  ];


  const renderEmployeeCard =  (card, index) => {
    return (

      
      <Card style={{ width: "18rem" }} key={index} className="box border bg-dark p-4">
        <Card.Img variant="top" src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png" />
        <Card.Body>
          <Card.Title>{card.firstName}</Card.Title>
          <Card.Title>{card.lastName}</Card.Title>
          <Card.Text>{card.occupation}</Card.Text>
          <Card.Text>{card.tribe}</Card.Text>
        </Card.Body>
      </Card> 
    );
  };
  return <div className="grid">{employeeInfo.map(renderEmployeeCard)}</div>;
};


export default EmployeesNewCards;
