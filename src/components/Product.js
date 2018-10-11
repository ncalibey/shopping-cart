import React, { Component } from 'react';
import AddToCart from './AddToCart.js'
import EditProduct from './EditProduct.js'

class Product extends Component {
  state = {
    forumOpen: false,
  }

  handleDeleteClick = (e) => {
    e.preventDefault();

    this.props.onDeleteClick(this.props.idx);
  }

  handleEditClick = (e) => {
    e.preventDefault();

    this.setState({ forumOpen: true });
  }

  handleCancelClick = () => {
    this.setState({ forumOpen: false });
  }

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
          {this.state.forumOpen ? '' : <a className="button edit" onClick={this.handleEditClick}>Edit</a>}
          </div>
          <a
            className="delete-button"
            onClick={this.handleDeleteClick}
          >
            <span>X</span>
          </a>
        </div>

        {this.state.forumOpen ? <EditProduct
          title={this.props.title}
          qty={this.props.qty}
          price={this.props.price}
          id={this.props.id}
          onCancelClick={this.handleCancelClick}
          onUpdateClick={this.props.onUpdateClick}
        /> : ''}
      </div>
    )
  }
}

export default Product;
