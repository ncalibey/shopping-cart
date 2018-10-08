import React, { Component } from 'react';

class Cart extends Component {
  handleClearCart = () => {
    this.props.checkout();
  }

  render () {
    <h2>Your Cart</h2>
    if (this.props.cart.length > 0) {
      const cartItems = this.props.cart.map(product => (
        <tr>
          <td>{product.title}</td>
          <td>{product.quantity}</td>
          <td>${product.price}</td>
        </tr>
      ));

      const total = this.props.cart.reduce((acc, item) => {
        return acc += (item.price * item.quantity);
      }, 0).toFixed(2);

      return (
        <div class="cart">
          <h2>Your Cart</h2>
          <table class="cart-items">
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {cartItems}
            <tr>
              <td colspan="3" class="total">Total: ${total}</td>
            </tr>
          </table>
          <a
            className="button checkout"
            onClick={this.handleClearCart}
          >
            Checkout
          </a>
        </div>
      )
    } else {
      return (
        <div className="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a className="button checkout disabled">Checkout</a>
        </div>
      )
    }
  }
}

export default Cart;
