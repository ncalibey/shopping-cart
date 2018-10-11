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
});
