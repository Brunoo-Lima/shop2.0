import productActionTypes from './action-types';
import { ProductState } from './reducer';

export const selectProduct = (payload: ProductState) => ({
  type: productActionTypes.SELECT_PRODUCT,
  payload,
});
