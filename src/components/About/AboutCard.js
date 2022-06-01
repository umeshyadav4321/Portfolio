import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Umesh Yadav </span>
            from <span className="purple"> Mumbai,Maharashtra.</span><br></br>
            <br />I am a BSC IT graduate from Mumbai University.Currently Pursing my Full-Stack Web-Development course at Masai School.<br></br>
            Aspiring Full-Stack Web-Developer with MERN stack Technology.Looking forword to honing my skills and knowledge in a challenging environment.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            
            <li className="about-activity">
              <ImPointRight />Sports Activities
            </li>
            <li className="about-activity">
              <ImPointRight />Reading Tech Blogs
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
