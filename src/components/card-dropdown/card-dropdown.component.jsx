import "./card-dropdown.style.scss";
import {useContext} from "react";
import {Link} from "react-router-dom";

import Button from "../button/button.component";
import CardItem from "../card-item/card-item.component";
import {CardContext} from "../../context/card.context";

const CardDropdown = () => {
  const {cardItems} = useContext(CardContext);
  const {isCardOpen, setIsCardOpen} = useContext(CardContext);
  const toogleIsCardClose = () => setIsCardOpen(false);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cardItems.map((item) => (
          <CardItem key={item.id} cardItem={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button onClick={toogleIsCardClose}>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CardDropdown;
