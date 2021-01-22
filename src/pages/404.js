import * as React from "react";

import Layout from "../components/layout";

import { Container, Row, Col , Card, CardHeader} from "reactstrap";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <section className="section">
        <Container>
          <Row>
            <Col md="6">
              <Card className="card-plain">
                <CardHeader>
                  <h1 className="profile-title text-left">The page you are looking for was not found on the server</h1>
                  <h3 className="text-on-back">404</h3>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
