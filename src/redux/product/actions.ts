import productActionTypes from './action-types';
import { ProductItem } from './reducer';

export const selectProduct = (payload: ProductItem) => ({
  type: productActionTypes.SELECT_PRODUCT,
  payload,
});
