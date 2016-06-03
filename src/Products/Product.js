import react from 'react';
import reactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default React.createClass({
   render() {
      return (
        <div className="panel panel-default">
          <Row className="show-grid">
            <Col md={4}>
              <p >{this.props.image}</p>
            </Col>
            <Col md={8}>
              <p >{this.props.title}</p>
              <p >{this.props.price}</p>
              <p >{this.props.desc}</p>
            </Col>
          </Row>
        </div>
      )
   } 
})