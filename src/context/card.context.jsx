import {createContext, useState, useEffect} from "react";

const addCardItem = (cardItems, productToAdd) => {
  const existingCardItem = cardItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCardItem) {
    return cardItems.map((item) =>
      item.id === productToAdd.id
        ? {...item, quantity: item.quantity + 1}
        : item
    );
  }

  return [...cardItems, {...productToAdd, quantity: 1}];
};

const removeCardItem = (cardItems, productToRemove) => {
  const existingCardItem = cardItems.find(
    (item) => item.id === productToRemove.id
  );

  if (existingCardItem.quantity === 1) {
    return cardItems.filter((cardItem) => cardItem.id !== productToRemove.id);
  }

  return cardItems.map((item) =>
    item.id === productToRemove.id
      ? {...item, quantity: item.quantity - 1}
      : item
  );
};
const removeButton = (cardItems, remove) =>
  cardItems.filter((cardItem) => cardItem.id !== remove.id);
export const CardContext = createContext({
  isCardOpen: false,

  setIsCardOpen: () => {},

  cardItems: [],
  addItemToCard: () => {},
  removeItemFromCard: () => {},
  removeItemButton: () => {},
  cardCount: 0,
  cardTotal: 0,
});

export const CardProvider = ({children}) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const [cardItems, setCardItems] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [cardTotal, setCardTotal] = useState(0);

  useEffect(() => {
    const newCardCount = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );
    setCardCount(newCardCount);
  }, [cardItems]);
  useEffect(() => {
    const newCardTotal = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity * cardItem.price,
      0
    );
    setCardTotal(newCardTotal);
  }, [cardItems]);

  const addItemToCard = (productToAdd) => {
    setCardItems(addCardItem(cardItems, productToAdd));
  };
  const removeItemFromCard = (productToRemove) => {
    setCardItems(removeCardItem(cardItems, productToRemove));
  };
  const removeItemButton = (remove) => {
    setCardItems(removeButton(cardItems, remove));
  };

  const value = {
    isCardOpen,

    setIsCardOpen,
    addItemToCard,
    removeItemFromCard,
    removeItemButton,
    cardItems,
    cardCount,
    cardTotal,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
