import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div >
        <Card.Text style={{ textAlign: "justify" }}>
          {props.stack}
        </Card.Text>
        <Button style={{marginLeft:"5px"}} variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Git-Hub"}
        </Button>
        <Button  style={{marginLeft:"15px"}} variant="primary" href={props.LiveLink} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Live-Site"}
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
