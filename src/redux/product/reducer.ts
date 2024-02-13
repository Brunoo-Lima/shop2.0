import productActionTypes from './action-types';

// export type ProductItem = {
//   id: number;
//   imgUrl: string;
//   product: string;
//   price: number;
// };

export type ProductState = {
  product: number | null;
};

const initialState: ProductState = {
  product: null,
};

export type Action = { type: string; payload: any };

const ProductReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case productActionTypes.SELECT_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
