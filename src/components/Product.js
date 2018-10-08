import React, { Component } from 'react';
import AddToCart from './AddToCart.js'
import EditProduct from './EditProduct.js'

class Product extends Component {
  render () {
    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">${this.props.price}</p>
          <p className="quantity">{this.props.qty} left in stock</p>
          <div className="actions product-actions">
            <AddToCart
              id={this.props.id}
              addProduct={this.props.addProduct}
              qty={this.props.qty}
            />
            <EditProduct />
          </div>
          <a className="delete-button"><span>X</span></a>
        </div>
      </div>
    )
  }
}

export default Product;
