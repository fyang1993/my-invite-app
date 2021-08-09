import { Row, Col } from "antd";
import Container from "../../common/Container";

import {
  FooterSection,
  Title,
  Para
} from "./styles";

const Footer = () => {

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between" align="middle">
            <Col lg={10} md={10} sm={12} xs={12}>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12} >
              <Title>{"Made with love in Melbourne"}</Title>
              <Para>@ 2016 Broccoli & CO. All rights reserved</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default Footer;
