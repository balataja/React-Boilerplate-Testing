import react from 'react';
import reactDOM from 'react-dom';
import Product from './Product';
import { Grid } from 'react-bootstrap';

export default React.createClass({
   render() {
      var inventory = [
        { title: 'Red Bull', price: '2', description: 'Delicious and nutricious', image: 'image goes here'},
        { title: 'Monster', price: '2', description: 'Not as good as red bull, but more caffiene', image: 'image goes here'},
        { title: 'Keirig Pods', price: '1', description: 'Easy to make coffee', image: 'image goes here'}
      ];

      var products = [];
      inventory.forEach(function(product) {
        products.push(<Product title={product.title} price={product.price} desc={product.description} image={product.image}/>);
      });
      
      return (
        <div>
          <p>Products!</p>
          <Grid>
            {products}
          </Grid>
        </div>
      )
   } 
})