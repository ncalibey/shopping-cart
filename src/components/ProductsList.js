import React, { Component } from 'react';
import Product from './Product.js';

class ProductsList extends Component {
  render () {
    const products = this.props.data.map( product => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        qty={product.quantity}
        price={product.price}
        addProduct={this.props.addProduct}
      />
    ));

    return (
      <div className="product-listing">
        <h2>Products</h2>
        {products}
      </div>
    )
  }
}

export default ProductsList;
