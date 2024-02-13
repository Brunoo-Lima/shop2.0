// import { ReactNode, createContext, useState } from 'react';

// type CardsProps = {
//   id: number;
//   imgUrl: string;
//   product: string;
//   price: number;
// };

// type UserContextProps = {
//   cartItems: CardsProps[];
//   setCartItems: React.Dispatch<React.SetStateAction<CardsProps[] | []>>;

//   dataProducts: CardsProps | null;
//   setDataProducts?: React.Dispatch<React.SetStateAction<CardsProps | null>>;

//   openSidebar: boolean;
//   setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;

//   handleAddItem: (newItem: CardsProps) => void;

//   handleOpenProduct: (product: CardsProps) => void;
//   handleRemoveItem: (id: number) => void;
// };

// export const UserContext = createContext<UserContextProps | undefined>(
//   undefined,
// );

// export const UserProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CardsProps[] | []>([]);
//   const [dataProducts, setDataProducts] = useState<CardsProps | null>(null);

//   const [openSidebar, setOpenSidebar] = useState(false);

//   const handleAddItem = (newItem: CardsProps) => {
//     setCartItems([
//       ...cartItems,
//       {
//         id: newItem.id,
//         imgUrl: newItem.imgUrl,
//         product: newItem.product,
//         price: newItem.price,
//       },
//     ]);
//     alert('Item adicionado com Sucesso!');
//   };

//   const handleRemoveItem = (id: number) => {
//     const newCart = [...cartItems];
//     const filterCart = newCart.filter((item) => (item.id !== id ? item : null));
//     setCartItems(filterCart);
//   };

//   const handleOpenProduct = (product: CardsProps) => {
//     setDataProducts(product);
//   };

//   const value = {
//     cartItems,
//     setCartItems,

//     dataProducts,

//     openSidebar,
//     setOpenSidebar,

//     handleAddItem,

//     handleOpenProduct,
//     handleRemoveItem,
//   };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
