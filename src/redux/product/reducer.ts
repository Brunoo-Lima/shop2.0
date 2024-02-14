import productActionTypes from './action-types';

export type ProductState = {
  id: number;
  imgUrl: string;
  product: string;
  price: number;
};

const initialState: ProductState = {
  id: 0,
  imgUrl: '',
  product: '',
  price: 0,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action = { type: string; payload: any };

const ProductReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case productActionTypes.SELECT_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
