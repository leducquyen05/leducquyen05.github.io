import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiWireshark, SiKalilinux } from "react-icons/si";
import { FaBug } from "react-icons/fa";
// Nếu không có SVG, bạn có thể thay thế bằng icon font hoặc tìm các icon svg cho Burp Suite, Nmap
import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <SiWireshark fontSize={"24px"} />
        <div className="tech-icons-text">Wireshark</div> {/* [cite: 23] */}
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiKalilinux fontSize={"24px"} />
        <div className="tech-icons-text">Nmap / Metasploit</div> {/* [cite: 41] */}
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <FaBug fontSize={"24px"} />
        <div className="tech-icons-text">Burp Suite</div> {/* [cite: 41] */}
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <div className="tech-icons-text" style={{ fontSize: "1.14rem" }}>VMware</div> {/* [cite: 35] */}
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
    </Row>
  );
}

export default Toolstack;