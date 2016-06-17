import react from 'react';
import reactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
//import ImageGallery from '../../node_modules/react-image-gallery/src/ImageGallery.jsx';

export default React.createClass({
   render() {
      return (
        <Grid>
          <Row className="show-grid product">
            <Col xs={4} md={4}><img src={this.props.image}></img></Col>
            <Col xs={8} md={8}>
              <h2>{this.props.title}</h2>
              <p >{this.props.price}</p>
              <p >{this.props.desc}</p>
            </Col>
          </Row>
        </Grid>
      )
   } 
})