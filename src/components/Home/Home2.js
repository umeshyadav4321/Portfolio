import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import portfolio from "../../Assets/portfolio.png"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm passionate Full-Stack Web developer 
              <br />Proficient in technologies like
              <i>
                <b className="purple"> Javascript, React, Redux, NODE and Express.</b>
              </i>
              <br />
              <br />
              Quick Lerner and an aspiring full-stack web developer with core knowledge of MERN stack technology.Looking forword to apply and enhance my skills and knowledge in a challenging environment.

              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and */}
              {/* <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i> */}
              {/* &nbsp; like */}
              {/* <i>
                <b className="purple"> React.js </b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{height:"380px",borderRadius:"50%"}} src={portfolio} myclassName="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON </h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <div>            <p><b>umeshyadav3190@gmail.com</b></p>
</div>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/umeshyadav4321"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/umesh-yadav-5140/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
