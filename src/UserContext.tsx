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
    product: 'Camisa Beyond the Limits',
    price: 90.0,
  },
  {
    id: 3,
    imgUrl: '../shirt2.svg',
    product: 'Camisa Beyond the Limits',
    price: 90.0,
  },
  {
    id: 4,
    imgUrl: '../shirt2.svg',
    product: 'Camisa Beyond the Limits',
    price: 90.0,
  },
  {
    id: 5,
    imgUrl: '../shirt.svg',
    product: 'Camisa Beyond the Limits',
    price: 79.9,
  },
  {
    id: 6,
    imgUrl: '../shirt2.svg',
    product: 'Camisa Beyond the Limits',
    price: 90.0,
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
  handleAddItem: () => void;

  handleOpenProduct: (product: CardsProps) => void;
};

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CardsProps[]>([]);
  const [dataProducts, setDataProducts] = useState<CardsProps | null>(null);

  const [openNavbar, setOpenNavbar] = useState(false);

  const handleAddItem = (newItem: CardsProps) => {
    setCartItems([
      ...cartItems,
      {
        ...newItem,
      },
    ]);
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
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
