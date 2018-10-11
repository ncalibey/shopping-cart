import React, { Component } from 'react';
import Cart from './Cart.js';
import ProductsList from './ProductsList.js';
import AddProduct from './AddProduct.js';
import data from '../lib/data.js'
import store from '../store';
import {Provider} from 'react-redux';

class Shop extends Component {
  componentDidMount() {
    store.subscribe(() => { this.forceUpdate() });
    store.dispatch({ type: 'PRODUCTS_RECEIVED', products: data});
  }

  handleDeleteClick = (i) => {
    store.dispatch({type: 'PRODUCT_DELETED', index: i})
  }

  handleUpdateClick = (id, product) => {
    store.dispatch({type: 'PRODUCT_UPDATED', product, id})
  }

  handleNewProduct = (product) => {
    store.dispatch({type: 'PRODUCT_ADDED', product: product});
  }

  clearCart = () => {
    store.dispatch({type: 'CLEAR_CART'})
  }

  updateCart = (productId) => {
    const newCart = [];
    let product = store.getState().products.find(product => product.id === productId);

    store.dispatch({type: 'UPDATE_CART', product, id: productId})
  }

  handleAddProduct = (productId) => {
    this.updateCart(productId);
    store.dispatch({type: 'REDUCE_PRODUCT_COUNT', id: productId})
  }

  render() {
    const products = store.getState().products;
    const cart = store.getState().cart;

    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart
            cart={cart}
            checkout={this.clearCart}
          />
        </header>
        <main>
          <ProductsList
            products={products}
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
