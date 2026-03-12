import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaLinux, FaWindows, FaServer } from "react-icons/fa";
import { SiElasticsearch, SiGrafana, SiPrometheus, SiCisco, SiPaloaltonetworks } from "react-icons/si";
import C from "../../Assets/TechIcons/C++.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch fontSize={"24px"} />
        <div className="tech-icons-text">ELK Stack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana fontSize={"24px"} />
        <div className="tech-icons-text">Grafana</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus fontSize={"24px"} />
        <div className="tech-icons-text">Prometheus</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaServer fontSize={"24px"} />
        <div className="tech-icons-text">Zabbix</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCisco fontSize={"24px"} />
        <div className="tech-icons-text">Cisco Firepower</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPaloaltonetworks fontSize={"24px"} />
        <div className="tech-icons-text">Palo Alto</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux fontSize={"24px"} />
        <div className="tech-icons-text">Linux</div>
      </Col>
    </Row>
  );
}

export default Techstack;