const rootReducer = (state = {products: [], cart: []}, action) => {
  return {
    products: productsReducer(state.products, action),
    cart: cartReducer(state.cart, action)
  }
}

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED':
      return [...state, ...action.products];
      break;
    case 'PRODUCT_ADDED':
      return [...state, action.product];
      break;
    case 'PRODUCT_DELETED':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
      break;
    case 'PRODUCT_UPDATED':
      return state.map(item => item.id === action.id ? Object.assign({}, item, action.product) : item)
      break;
    case 'REDUCE_PRODUCT_COUNT':
      return state.map(product => product.id === action.id ? Object.assign({}, product, { quantity: product.quantity - 1}) : product);
      break;
    default:
      return state;
  }
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return [];
      break;
    case 'UPDATE_CART':
      const newCart = [];

      if (state.filter(product => product.id === action.id).length === 0) {
        newCart.push(Object.assign({}, action.product, { quantity: 1 }));
      }

      state.forEach(product => {
        if (product.id === action.id) {
          newCart.push(Object.assign({}, product, {
            quantity: product.quantity + 1,
          }));
        } else {
          newCart.push(product);
        }
      });
      newCart.sort((a, b) => b.quantity - a.quantity);

      return newCart;
      break;
    default:
      return state;
  }
}

export default rootReducer;
