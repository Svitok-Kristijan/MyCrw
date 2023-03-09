import {useContext} from "react";
import {CardIconContainer, ShopingBag, ItemCount} from "./card-icon.style";

import {CardContext} from "../../context/card.context";

const CardIcon = () => {
  const {isCardOpen, setIsCardOpen, cardCount} = useContext(CardContext);
  const toogleIsCardOpen = () => setIsCardOpen(!isCardOpen);

  return (
    <CardIconContainer onClick={toogleIsCardOpen}>
      <ShopingBag className="shopping-icon" />
      <ItemCount>{cardCount}</ItemCount>
    </CardIconContainer>
  );
};

export default CardIcon;
