import "./checkout-item.style.scss";

import {useContext} from "react";
import {CardContext} from "../../context/card.context";

const CheckoutItem = ({cardItem}) => {
  const {name, imageUrl, quantity, price} = cardItem;
  const {removeItemButton, addItemToCard, removeItemFromCard} =
    useContext(CardContext);
  const clearItemHandler = () => removeItemButton(cardItem);
  const removeItemFromCardHandler = () => removeItemFromCard(cardItem);
  const addItemToCardHandler = () => addItemToCard(cardItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        {" "}
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="decrease" onClick={removeItemFromCardHandler}>
          &#10096;
        </span>
        {quantity}
        <span className="increase" onClick={addItemToCardHandler}>
          &#10097;
        </span>
      </span>
      <span className="price">{price} €</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10008;
      </div>
    </div>
  );
};

export default CheckoutItem;
