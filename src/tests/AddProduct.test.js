import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AddProduct from '../components/AddProduct';

describe('AddProduct', () => {
  it ('renders anchor elements', () => {
    const wrapper = shallow(<AddProduct />)
    const anchor = wrapper.find('a')

    expect(anchor.length).toEqual(3)
  });

  it ('updates state upon input change', () => {
    const wrapper = shallow(<AddProduct />)
    const input = wrapper.find('input[name="title"]')
    input.simulate('change', 
      { 
        target: {
          name: 'title',
          value: 'hello'
      }
    })
    
    expect(wrapper.state().fields.title).toEqual('hello')
  });

  it ('calls onSubmit function when form is submitted', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<AddProduct onSubmit={mockFunc} />)
    const anchor = wrapper.find('div.actions a').first()

    anchor.simulate('click', {
      preventDefault: () => {}
    });
    
    expect(mockFunc.mock.calls[0].length).toEqual(1)
  });

  it ('should reset the state upon clicking cancel', () => {
    const wrapper = shallow(<AddProduct />)
    const anchor = wrapper.find('div.actions a').last()

    anchor.simulate('click', {
      preventDefault: () => {}
    });
    
    expect(wrapper.state().fields.title).toEqual('')
    expect(wrapper.state().fields.price).toEqual('')
    expect(wrapper.state().fields.quantity).toEqual('')
  });

});
