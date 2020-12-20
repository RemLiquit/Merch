import React, { useContext } from "react";
import { PaypalButton } from "react-paypal-button";
import AppContext from "../context/AppContext";
import "../styles/components/Payment.css";

const Payments = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const payPalOptions = {
    cliendID:
      "AQ9xgsbYp7o7dwDWOFGOVthQoANJ46c7dkxvLMZQ-_tlB3VV_2JkoNO1QEIWn73KBikn14DERdygPxLg",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "react",
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push("/checkout/success");
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div classNam="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price} </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PaypalButton
            paypalOptions={paypalOptions}
            paypalStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log("Start Payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data = console.log(data))}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payments;
