import React, { Component } from 'react';

class AddToCart extends Component {
  handleAddToCart = () => {
    this.props.addProduct(this.props.id);
  }

  render () {
    if (this.props.qty > 0) {
      return (
        <a
          className="button add-to-cart"
          onClick={this.handleAddToCart}
        >
          Add to Cart
        </a>
      )
    } else {
      return (
        <a
          className="button add-to-cart disabled"
        >
          Add to Cart
        </a>
      )
    }
  }
}

export default AddToCart;
