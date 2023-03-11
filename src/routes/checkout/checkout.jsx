import "./checkout.style.scss";
import {useContext} from "react";
import {Link} from "react-router-dom";

import CheckoutItem from "../../components/checkout-item/checkout-item.components";

import {CardContext} from "../../context/card.context";

const Checkout = () => {
  const {cardItems, cardTotal} = useContext(CardContext);
  const {clearDropdown} = useContext(CardContext);
  const clearDropdowHandler = () => clearDropdown(null);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cardItems.map((cardItem) => {
        return <CheckoutItem key={cardItem.id} cardItem={cardItem} />;
      })}
      <span className="total">
        Total : {cardTotal} €
        <Link
          onClick={clearDropdowHandler}
          to="/payment"
          className="button-pay"
        >
          Pay now
        </Link>
      </span>
    </div>
  );
};
export default Checkout;
