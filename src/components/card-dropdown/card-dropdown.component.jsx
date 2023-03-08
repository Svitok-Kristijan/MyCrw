import {
  CardDropdownContainer,
  EmptyMessage,
  CardItems,
} from "./card-dropdown.style";
import {useContext} from "react";
import {Link} from "react-router-dom";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import CardItem from "../card-item/card-item.component";
import {CardContext} from "../../context/card.context";

const CardDropdown = () => {
  const {cardItems} = useContext(CardContext);
  const {isCardOpen, setIsCardOpen} = useContext(CardContext);
  const toogleIsCardClose = () => setIsCardOpen(false);

  return (
    <CardDropdownContainer>
      <CardItems>
        {cardItems.length ? (
          cardItems.map((item) => <CardItem key={item.id} cardItem={item} />)
        ) : (
          <EmptyMessage>Your card is empty</EmptyMessage>
        )}
      </CardItems>
      <Link to="/checkout">
        <Button buttonType={BUTTON_TYPE_CLASSES} onClick={toogleIsCardClose}>
          GO TO CHECKOUT
        </Button>
      </Link>
    </CardDropdownContainer>
  );
};

export default CardDropdown;
