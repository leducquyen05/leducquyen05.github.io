import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"; // Thêm icon Mail

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 
                style={{ paddingBottom: 15, fontFamily: "'JetBrains Mono', monospace" }} 
                className="heading"
              >
                Hi!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 
                className="heading-name" 
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                I'm 
                <strong 
                  className="main-name" 
                  style={{ textShadow: "0px 0px 12px rgba(199, 112, 240, 0.6)" }} // Hiệu ứng sáng mờ cho tên
                >
                  {" "}Le Duc Quyen
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ 
                  maxHeight: "450px", 
                  filter: "drop-shadow(0px 0px 15px rgba(199, 112, 240, 0.3))" // Hiệu ứng sáng mờ cho ảnh
                }} 
              />
            </Col>
          </Row>
        </Container>
      </Container>
      
      {/* Component Home2 chứa phần giới thiệu mà chúng ta đã làm */}
      <Home2 />

      {/* Phần Social Links */}
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontFamily: "'JetBrains Mono', monospace" }}>FIND ME ON</h1>
            <p style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://github.com/leducquyen05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;