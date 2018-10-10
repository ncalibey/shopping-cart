import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Shop from '../components/Shop';
import ProductsList from '../components/ProductsList';

describe ('Shop', () => {
  it('has an h1 element', () => {
    const wrapper = shallow(<Shop />);

    expect(wrapper.find('h1').text()).toEqual('The Shop!');
  });

  it ('renders one <ProductsList /> component', () => {
    const wrapper = shallow(<Shop />);

    expect(wrapper.find(ProductsList).length).toBe(1);
  });

  it ('updates cart state when an item is added', () => {
    const wrapper = shallow(<Shop />);

    expect(wrapper.state().cart.length).toBe(0);
    wrapper.instance().updateCart('1');
    expect(wrapper.state().cart.length).toBe(1);
  });
});
