import React, { Component } from 'react';

class AddProduct extends Component {
  state = {
    fields: {
      title: '',
      price: '',
      quantity: '',
    },
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.fields);
  }

  handleChange = (e) => {
    const fields = Object.assign({}, this.state.fields, {
      [e.target.name]: e.target.value,
    });

    this.setState({ fields });
  }

  handleClick = (e) => {
    this.setState({
      fields: {
        title: '',
        price: '',
        quantity: '',
      },
    });
  }

  render () {
    return (
      <div className="add-form visible">
        <p><a className="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              value={this.state.fields.title}
              name="title"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="text"
              id="product-price"
              value={this.state.fields.price}
              name="price"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="text"
              id="product-quantity"
              value={this.state.fields.quantity}
              name="quantity"
              onChange={this.handleChange}
            />
          </div>

          <div className="actions form-actions">
            <a
              className="button"
              onClick={this.handleSubmit}
            >
              Add
            </a>
            <a
              className="button"
              onClick={this.handleClick}
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    )
  }
}

export default AddProduct;
