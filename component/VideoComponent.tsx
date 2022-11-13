import React from 'react';
import { Card, Row, Col, Ratio } from 'react-bootstrap';
const videoComponent = (props: any) => {
  const { title, e } = props;
  return (
    <Row xs={1} md={2} className="g-4 rr">
      <Col>
        <Card >
          <div>
          <Card.Img className="bo" src={e} />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div>
             <p title="verify">  <span> <i className="gg-check-o"></i> </span> </p>
              <span className="verify">verify</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default videoComponent;
