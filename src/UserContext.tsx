import { ReactNode, createContext, useState } from 'react';

type CardsProps = {
  id: number;
  imgUrl: string;
  product: string;
  price: number;
};

const cards: CardsProps[] = [
  {
    id: 1,
    imgUrl: '../shirt.svg',
    product: 'Camisa Beyond the Limits',
    price: 79.9,
  },
  {
    id: 2,
    imgUrl: '../shirt2.svg',
    product: 'Camiseta Explorer',
    price: 90.0,
  },
  {
    id: 3,
    imgUrl: '../shirt2.svg',
    product: 'Camiseta Explorer',
    price: 90.0,
  },
  {
    id: 4,
    imgUrl: '../shirt2.svg',
    product: 'Camiseta Explorer',
    price: 90.0,
  },
  {
    id: 5,
    imgUrl: '../shirt.svg',
    product: 'Camisa Beyond the Limits',
    price: 62.9,
  },
  {
    id: 6,
    imgUrl: '../shirt2.svg',
    product: 'Camiseta Explorer',
    price: 89.9,
  },
];

type UserContextProps = {
  cards: CardsProps[];

  cartItems: CardsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<CardsProps[] | []>>;

  dataProducts: CardsProps | null;
  // setDataProducts: React.Dispatch<React.SetStateAction<CardsProps[] | null>>;

  openNavbar: boolean;
  setOpenNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddItem: (newItem: CardsProps) => void;

  handleOpenProduct: (product: CardsProps) => void;
  handleRemoveItem: (id: number) => void;
};

export const UserContext = createContext<UserContextProps | undefined>(
  undefined,
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CardsProps[] | []>([]);
  const [dataProducts, setDataProducts] = useState<CardsProps | null>(null);

  const [openNavbar, setOpenNavbar] = useState(false);

  const handleAddItem = (newItem: CardsProps) => {
    setCartItems([
      ...cartItems,
      {
        id: newItem.id,
        imgUrl: newItem.imgUrl,
        product: newItem.product,
        price: newItem.price,
      },
    ]);
  };

  const handleRemoveItem = (id: number) => {
    const newCart = [...cartItems];
    const filterCart = newCart.filter((item) => (item.id !== id ? item : null));
    setCartItems(filterCart);
  };

  const handleOpenProduct = (product: CardsProps) => {
    setDataProducts(product);
  };

  const value = {
    cartItems,
    setCartItems,
    dataProducts,
    setDataProducts,

    openNavbar,
    setOpenNavbar,

    cards,
    handleAddItem,

    handleOpenProduct,
    handleRemoveItem,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
