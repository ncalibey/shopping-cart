import React, { Component } from 'react';
import Product from './Product.js';

class ProductsList extends Component {
  render () {
    const products = this.props.products.map((product, i) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        idx={i}
        title={product.title}
        qty={product.quantity}
        price={product.price}
        addProduct={this.props.addProduct}
        onUpdateClick={this.props.onUpdateClick}
        onDeleteClick={this.props.onDeleteClick}
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
