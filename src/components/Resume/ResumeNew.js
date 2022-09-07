import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
// import resume from "../../Assets../Soumyajit_Behera-BIT_MESRA.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import { FaLinkedinIn } from "react-icons/fa";
import { Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/umeshyadav4321/portfolio/master/src/Assets/Umesh_Yadav_Resume.pdf";
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" id="contact">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>

         
            <a
                href="https://docs.google.com/document/d/1duROtYd6Z1JI_x297eQTJ5r5xSRYvZNQnrYbaEqgrnA/edit"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                
          <h1>See Resume</h1>
              </a>
          

        </Row>
        <Row style={{ justifyContent: "center", position: "relative"}}>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/umeshyadav4321"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <h1><AiFillGithub /></h1>
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            <li className="social-icons">
         <a
                href="https://www.linkedin.com/in/umesh-yadav-5140/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <h1><FaLinkedinIn /></h1>
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li> */}
          </ul>
        </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h6><span style={{color:""}}>Gmail:-</span>umeshyadav3190@gmail.com</h6>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </div>
  );
}

export default ResumeNew;
