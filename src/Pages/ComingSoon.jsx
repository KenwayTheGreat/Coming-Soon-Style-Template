import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import {
  LogoStyle,
  SloganStyle,
  SpanStyle,
  ButtonStyle,
} from "./ComingSoonStyle";

function ComingSoon() {
  const { Title } = Typography;
  return (
    <div className="landing">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <Title style={LogoStyle} strong>
            LOGO
          </Title>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <Title style={SloganStyle}>
            Great Things happen to those who wait.{" "}
            <span style={SpanStyle}>Coming Soon !</span>
          </Title>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        <Col span={12}>
          <Button shape="round" style={ButtonStyle}>
            Send us a deal {" "}
            <SendOutlined />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ComingSoon;
