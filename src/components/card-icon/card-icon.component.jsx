import {useContext} from "react";
import "./card-icon.style.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {CardContext} from "../../context/card.context";

const CardIcon = () => {
  const {isCardOpen, setIsCardOpen, cardCount} = useContext(CardContext);
  const toogleIsCardOpen = () => setIsCardOpen(!isCardOpen);

  return (
    <div className="cart-icon-container" onClick={toogleIsCardOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cardCount}</span>
    </div>
  );
};

export default CardIcon;
