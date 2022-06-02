import React from 'react'
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";

// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {oLogoHtml5I} from "react-icons"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  
  DiNpm
  
} from "react-icons/di";
import{
    SiRedux,
    SiExpress,
    SiChakraui
} from "react-icons/si"
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

import {
    SiLinux,
    SiVisualstudiocode
  } from "react-icons/si";







const Skills = () => {
  return (
      
    <Container fluid className="about-section">
    <Particle />
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <h1 className="project-heading">
          <h1 >Skills </h1>
    </h1>
    </Row>
   
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
        <h1>HTML</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
        <h1>CSS 3</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJsBadge />
        <h1>JavaScript</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h1>React</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRedux/>
        <h1>Redux</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h1>NodeJS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpress/>
        <h1>ExpressJS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h1>MongoDB</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiChakraui/>
        <h1>Chakra UI</h1>
      </Col>
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
    </Row>

   
  
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
      <DiGit/>
        <h1>GIT</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h1>VS Code</h1>
       </Col>
  
    </Row>
  </Container>
  )
}

export default Skills