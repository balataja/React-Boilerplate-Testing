import react from 'react';
import reactDOM from 'react-dom';
import Product from './Product';
import { Grid } from 'react-bootstrap';

export default React.createClass({
   render() {
      var inventory = [
        { title: 'Red Bull', price: '2', description: 'Delicious and nutricious', image: 'http://lorempixel.com/100/75/food/1/'},
        { title: 'Monster', price: '2', description: 'Not as good as red bull, but more caffiene', image: 'http://lorempixel.com/100/75/food/2/'},
        { title: 'Keirig Pods', price: '1', description: 'Easy to make coffee', image: 'http://lorempixel.com/100/75/food/3/'}
      ];

      var products = [];
      inventory.forEach(function(product) {
        products.push(<Product title={product.title} price={product.price} desc={product.description} image={product.image}/>);
      });
      
      return (
        <div>
            {products}
        </div>
      )
   } 
})