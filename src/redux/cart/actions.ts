import cartActionTypes from './action-types';

export const addProductToCart = (payload: []) => ({
  type: cartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload: number) => ({
  type: cartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductQuantity = (payload: number) => ({
  type: cartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});

export const decreaseProductQuantity = (payload: number) => ({
  type: cartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});
