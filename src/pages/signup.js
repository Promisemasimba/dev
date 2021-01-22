import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const Signup = () => {
  return (
    <Layout stitle="Sign Up">
      <section className="section">
        <Container>
          <Row>
            <Col md="6">
              <Card className="card-plain">
                <CardHeader>
                  <h1 className="profile-title text-left">Sign Up</h1>
                  <h5 className="text-on-back">02</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Your Name</label>
                          <Input defaultValue="Enter your name" type="text" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Email address</label>
                          <Input placeholder="Enter your email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Enter Password</label>
                          <Input
                            defaultValue=""
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Enter Password Again</label>
                          <Input
                            defaultValue=""
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Company</label>
                          <Input defaultValue="" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button
                      className="btn-round float-right"
                      color="primary"
                      data-placement="right"
                      id="tooltip341148792"
                      type="button"
                    >
                      Sign Up
                    </Button>
                    <Button
                      className="btn-round float-right"
                      color="secondary"
                      data-placement="right"
                      id="tooltip341148792"
                      type="button"
                      tag={Link} to="/login"
                    >
                      Log In
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="right"
                      target="tooltip341148792"
                    >
                      Can't wait for your message
                    </UncontrolledTooltip>

                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto" md="4">
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-square-pin" />
                </div>
                <div className="description">
                  <h4 className="info-title">Find us at the office</h4>
                  <p>
                    Bld Mihail Kogalniceanu, nr. 8, <br />
                    7652 Bucharest, <br />
                    Romania
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-mobile" />
                </div>
                <div className="description">
                  <h4 className="info-title">Give us a ring</h4>
                  <p>
                    Michael Jordan <br />
                    +40 762 321 762 <br />
                    Mon - Fri, 8:00-22:00
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Signup;
