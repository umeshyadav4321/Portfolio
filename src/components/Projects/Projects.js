import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
import Boat from "../../Assets/Projects/Boat.png";
import juicy_Chemistry from "../../Assets/Projects/juicy_Chemistry.png";
import Frazzo from "../../Assets/Projects/Frazzo.png";
import Interntheory from "../../Assets/Projects/Interntheory.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects where i worked during Construct Week.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={juicy_Chemistry}
              isBlog={false}
              title="Juicy Chemistry"
              description="It is an inspired project from Juicy Chemistry.
              Juicy Chemistry is an Online E-Commmerce Beauty Products Store.Executed along 5 members during our construct Week"
              link="https://github.com/Iqbal0786/Juicy_Chemistry_Clone1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Interntheory}
              isBlog={false}
              title="Intern Theory"
              description="It is an inspired project from Inter-Theory Website.
              Intern Theory is website which provides job opportunities to freshers as well as youngesters.Executed along 2 members during our construct Week."
              link="https://github.com/iam-ayazahmad/InternTheory_Group_Project_Main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Frazzo}
              isBlog={false}
              title="Frazzo"
              description="Frazzo is an Online E-Commerce Website.Inspired project from Frazzo website.Executed by me within 4 days during my construct week"
              link="https://github.com/umeshyadav4321/Frazzo_Website_Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Boat}
              isBlog={false}
              title="Boat LifeStyle"
              description="It is an inspired project from Boat lifeStyle website.Tech-Stack used are React,npm libraries.Executed along with 5 members during or Construct-Week"
              link="https://github.com/soumyah1512/project_boat_lifestyle"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
