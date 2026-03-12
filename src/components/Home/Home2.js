import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            
            {/* Đã thêm font JetBrains Mono vào thẻ p này */}
            <p 
              className="home-about-body"
              style={{ fontFamily: "'JetBrains Mono', Consolas, 'Courier New', monospace" }}
            >
              Sinh viên ngành <i><b className="purple">An toàn Thông tin</b></i> với niềm đam mê nghiên cứu các kỹ thuật tấn công và phòng thủ hệ thống. 
              Định hướng phát triển theo hướng <i><b className="purple">Security Engineer / SOC Analyst</b></i>, tập trung vào phân tích mối đe dọa, 
              kiểm thử xâm nhập và xây dựng cơ chế phòng thủ chủ động.
              <br />
              <br />
              Trong ngắn hạn, tôi hướng đến việc tích lũy kinh nghiệm thực chiến thông qua môi trường thực tập tại doanh nghiệp, kết hợp với các chứng chỉ chuyên ngành. 
              <br />
              <br />
              Về dài hạn, mục tiêu của tôi là đủ năng lực để tham gia <i><b className="purple">tư vấn, thiết kế và triển khai hệ thống bảo mật</b></i> cho tổ chức ở quy mô doanh nghiệp.
            </p>
            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;