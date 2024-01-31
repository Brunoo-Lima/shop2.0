import { ReactNode, createContext } from 'react';

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
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined,
);

export const UserProvider = ({ children }: { children: ReactNode[] }) => {
  const value = {
    cards,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
