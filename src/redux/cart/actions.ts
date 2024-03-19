import cartActionTypes from './action-types';

type Product = {
  id: number;
  imgUrl: string;
  product: string;
  price: number;
};

export const addProductToCart = (payload: Product) => ({
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

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});
