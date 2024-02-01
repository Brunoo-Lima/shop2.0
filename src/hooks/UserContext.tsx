import { ReactNode, createContext, useState } from 'react';

type SectionCardsProps = {
  id: number;
  imgUrl: string;
  product: string;
  price: number;
};

const cards: SectionCardsProps[] = [
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

interface UserContextProps {
  cards: SectionCardsProps[];
  cartItems: SectionCardsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<SectionCardsProps[] | []>>;
  openNavbar: boolean;
  setOpenNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode[] }) => {
  const [cartItems, setCartItems] = useState<SectionCardsProps[]>([]);
  const [openNavbar, setOpenNavbar] = useState(false);
  const value = {
    cartItems,
    setCartItems,
    openNavbar,
    setOpenNavbar,
    cards,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
