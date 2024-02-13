import { combineReducers } from 'redux';

import cartReducer, { CartState } from './cart/reducer';
import ProductReducer, { ProductState } from './product/reducer';

export type RootState = {
  cartReducer: CartState;
  productReducer: ProductState;
};

const rootReducer = combineReducers({
  cartReducer,
  ProductReducer,
});

export default rootReducer;
