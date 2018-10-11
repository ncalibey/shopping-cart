import React, { Component } from 'react';

class EditProduct extends Component {
  state = {
    fields: {
      title: this.props.title,
      quantity: this.props.qty,
      price: this.props.price,
    }
  }

  handleChange = (e) => {
    const fields = Object.assign({}, this.state.fields, {
      [e.target.name]: e.target.value,
    });

    this.setState({ fields });
  }

  handleUpdateClick = (e) => {
    e.preventDefault();

    this.props.onUpdateClick(this.props.id, this.state.fields);

    this.props.onCancelClick();
  }

  handleCancelClick = (e) => {
    e.preventDefault();

    this.props.onCancelClick();
  }

  render () {
    const {title, quantity, price} = this.state.fields;

    return (
      <div class="edit-form">
        <h3>Edit Product</h3>
        <form>
          <div class="input-group">
            <label for="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>

          <div class="input-group">
            <label for="product-price">Price</label>
            <input
              type="text"
              id="product-price"
              name="price"
              value={price}
              onChange={this.handleChange}
            />
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input
              type="text"
              id="product-quantity"
              name="quantity"
              value={quantity}
              onChange={this.handleChange}
            />
          </div>

          <div class="actions form-actions">
            <a class="button" onClick={this.handleUpdateClick}>Update</a>
            <a id="cancel" class="button" onClick={this.handleCancelClick}>Cancel</a>
          </div>
        </form>
      </div>
    )
  }
}

export default EditProduct;
