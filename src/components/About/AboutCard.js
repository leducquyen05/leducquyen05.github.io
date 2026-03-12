import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote
          className="blockquote mb-0"
          style={{ fontFamily: "'JetBrains Mono', Consolas, 'Courier New', monospace" }}
        >
          <p style={{ textAlign: "justify", fontSize: "0.95em", lineHeight: "1.7" }}>
            Chào mọi người, mình là <span className="purple">Lê Đức Quyền </span>
            hiện đang sinh sống tại <span className="purple">Tp. Hồ Chí Minh, Việt Nam</span>.
            <br />
            Mình hiện là sinh viên chuyên ngành <span className="purple">An Toàn Thông Tin</span> tại
            <span className="purple"> Trường Đại học Gia Định</span>.
            <br />
            Định hướng của mình là phát triển theo con đường <span className="purple">Security Engineer / SOC Analyst</span>.
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)", marginTop: "15px", fontStyle: "italic" }}>
            Luôn chủ động xây dựng cơ chế phòng thủ vững chắc!
          </p>

          <footer className="blockquote-footer">Đức Quyền</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;