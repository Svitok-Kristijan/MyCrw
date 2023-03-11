import "./payment.scss";
import money from "../../assets/money.png";

const Payment = () => {
  return (
    <div className="payment-container">
      <h1 className="payment-h1">Thank you for your purchase</h1>
      <span>Payment succesfully completed</span>
      <img src={money} alt="money" />
    </div>
  );
};

export default Payment;
