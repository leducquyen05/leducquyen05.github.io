import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Nhớ copy ảnh dự án của bạn vào thư mục này nhé
import malwareImg from "../../Assets/Projects/malware.png";
import pentestImg from "../../Assets/Projects/pentest.png";
import firewallImg from "../../Assets/Projects/firewall.png";
import monitorImg from "../../Assets/Projects/monitor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Thêm font cho tiêu đề */}
        <h1 className="project-heading" style={{ fontFamily: "'JetBrains Mono', Consolas, 'Courier New', monospace" }}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        
        {/* Thêm font cho đoạn mô tả */}
        <p style={{ color: "white", fontFamily: "'JetBrains Mono', Consolas, 'Courier New', monospace" }}>
          Dưới đây là một số đồ án và dự án nghiên cứu mình đã thực hiện.
        </p>
        
        {/* Thêm font cho toàn bộ Row để các Card bên trong cũng nhận font này */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px", fontFamily: "'JetBrains Mono', Consolas, 'Courier New', monospace" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malwareImg}
              isBlog={false}
              title="Phân Tích Mã Độc"
              description="Thực hiện phân tích tĩnh và động trên 10 mẫu mã độc trong môi trường sandbox cô lập sử dụng VMware. Trích xuất chỉ số xâm phạm (IoC) bao gồm hash file, registry key bất thường, chữ ký mạng và mẫu giao tiếp C2. Sử dụng công cụ: Ghidra/IDA Pro, x64dbg, Wireshark, Process Monitor, Sysmon."
              ghLink="https://github.com/leducquyen05/Malware-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pentestImg}
              isBlog={false}
              title="Kiểm Thử Xâm Nhập Hệ Thống"
              description="Thiết kế môi trường lab đa nền tảng (Windows, Linux, Web) mô phỏng hạ tầng thực tế. Thực hiện quét và phân tích lỗ hổng sử dụng Nmap, Nikto, Burp Suite, Metasploit. Tiến hành kiểm thử theo quy trình chuẩn, ghi nhận bằng chứng tấn công và lập báo cáo đánh giá rủi ro."
              ghLink="https://github.com/leducquyen05/Testing-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firewallImg}
              isBlog={false}
              title="Triển Khai Tường Lửa Palo Alto"
              description="Phân tích yêu cầu bảo mật và thiết kế kiến trúc phân vùng mạng cho mô hình doanh nghiệp. Triển khai cấu hình Palo Alto NGFW bao gồm: Routing, NAT Policy, Security Policy, IPS/Zone Protection, SSL Decryption, File & Malware Policy, URL Filtering, Application Control."
              ghLink="https://github.com/leducquyen05/Palo-Alto"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monitorImg}
              isBlog={false}
              title="Giám Sát Mạng Grafana - Prometheus"
              description="Ứng dụng hệ thống giám sát mạng với Grafana và Prometheus. Triển khai trên hệ điều hành CentOS, cấu hình service. Xây dựng dashboard trực quan hóa metrics hệ thống theo thời gian thực và thiết lập Alertmanager gửi cảnh báo tự động qua email/Telegram khi vượt ngưỡng."
              ghLink="https://github.com/leducquyen05/Grafana-Prometheus"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;