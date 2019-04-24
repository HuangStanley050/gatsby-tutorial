import React from "react";
import { Container, Row, Col } from "reactstrap";
import sectionStyle from "./section.module.css";

const Section = props => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h1 className={sectionStyle.title}>Hello World</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="4">hello</Col>
          <Col sm="4">hello</Col>
          <Col sm="4">hello</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
