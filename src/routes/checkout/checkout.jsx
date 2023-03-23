import "./checkout.style.scss";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import {clearDropdown} from "../../store/card/card.action";
import {selectCardItems, selectCardTotal} from "../../store/card/card.selector";

const Checkout = () => {
  const dispatch = useDispatch();
  const cardItems = useSelector(selectCardItems);
  const cardTotal = useSelector(selectCardTotal);

  const clearDropdowHandler = () => dispatch(clearDropdown(null));
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
