import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import EditProduct from '../components/EditProduct';

describe('EditProduct', () => {
  it ('renders anchor elements', () => {
    const wrapper = shallow(<EditProduct />)
    const anchor = wrapper.find('a')

    expect(anchor.length).toEqual(2)
  });

  it ('updates state upon input change', () => {
    const wrapper = shallow(<EditProduct />)
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

  it ('should call function upon clicking cancel', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<EditProduct onCancelClick={mockFunc} />)
    const anchor = wrapper.find('#cancel')
    console.log(anchor.text())

    anchor.simulate('click', {
      preventDefault: () => {}
    });
    
    expect(mockFunc.mock.calls.length).toEqual(1)
  });

});
