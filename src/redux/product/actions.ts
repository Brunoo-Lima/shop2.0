import productActionTypes from './action-types';

export const selectProduct = (productId: number) => ({
  type: productActionTypes.SELECT_PRODUCT,
  payload: productId,
});
