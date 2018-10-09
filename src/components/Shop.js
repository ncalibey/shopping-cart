import React, { Component } from 'react';
import Cart from './Cart.js';
import ProductsList from './ProductsList.js';
import AddProduct from './AddProduct.js';
import data from '../lib/data.js'

class Shop extends Component {
  state = {
    data: data,
    cart: [],
  }

  handleDeleteClick = (id) => {
    let data = this.state.data;

    data.forEach((product, i) => {
      if (product.id === id) {
        data.splice(i, 1);
      }
    });

    this.setState({ data });
  }

  handleUpdateClick = (id, product) => {
    const data = this.state.data.map(item => {
      if (item.id === id) {
        return Object.assign({}, item, product);
      } else {
        return item;
      }
    });

    this.setState({ data });
  }

  handleNewProduct = (product) => {
    this.setState({
      data: data.concat(product),
    })
  }

  clearCart = () => {
    this.setState({
      cart: [],
    });
  }

  updateCart = (productId) => {
    const newCart = [];
    let product = this.state.data.filter(product => product.id === productId)[0];

    if (this.state.cart.filter(product => product.id === productId).length === 0) {
      newCart.push(Object.assign({}, product, {
        quantity: 1,
      }));
    }

    this.state.cart.forEach(product => {
      if (product.id === productId) {
        newCart.push(Object.assign({}, product, {
          quantity: product.quantity + 1,
        }));
      } else {
        newCart.push(product);
      }
    });

    newCart.sort((a, b) => b.quantity - a.quantity);

    this.setState({
      cart: newCart,
    });
  }

  handleAddProduct = (productId) => {
    this.updateCart(productId);

    const nextProducts = this.state.data.map(product => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          quantity: product.quantity - 1,
        });
      } else {
        return product;
      }
    });

    this.setState({
      data: nextProducts,
    });
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart
            cart={this.state.cart}
            checkout={this.clearCart}
          />
        </header>
        <main>
          <ProductsList
            data={this.state.data}
            addProduct={this.handleAddProduct}
            onUpdateClick={this.handleUpdateClick}
            onDeleteClick={this.handleDeleteClick}
          />
          <AddProduct
            onSubmit={this.handleNewProduct}
          />
        </main>
      </div>
    );
  }
}

export default Shop;
