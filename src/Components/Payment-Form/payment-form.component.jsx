import { useState, useEffect } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { CartContext } from "../../Contexts/cart.context";

import { HiClipboardCopy, HiCheck } from "react-icons/hi";
import { MdBlock } from "react-icons/md";
import PulseLoader from "react-spinners/PulseLoader";

import {
  Container,
  PaymentFormContainer,
  PaymentFormButton,
  PaymentFormTestInfo,
  TextCopied,
  Payment,
} from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal } = useContext(CartContext);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [displayCard, setDisplayCard] = useState(true);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [copyToClipboard, setCopyToClipboard] = useState(false);

  const successNumber = "4242 4242 4242 4242";
  const authNumber = "4000 0025 0000 3155";
  const declineNumber = "4000 0000 0000 0002";

  const cardStyle = {
    style: {
      base: {
        color: "#000000.",
        fontFamily: "Montserrat, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "14px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const copyCardNumber = (cardNr) => {
    setCopyToClipboard(true);
    navigator.clipboard.writeText(cardNr);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyToClipboard(false);
    }, 1500);
  }, [copyToClipboard]);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    if (paymentResult.error) {
      setIsProcessingPayment(false);
      setDisplayCard(false);
      setPaymentFailed(true);
    }

    if (paymentResult.paymentIntent.status === "succeeded") {
      setIsProcessingPayment(false);
      setDisplayCard(false);
      setPaymentSucceeded(true);
    }
  };

  return (
    <Container>
      {copyToClipboard ? (
        <TextCopied>
          <div>Text Copied.</div>
        </TextCopied>
      ) : null}
      <PaymentFormTestInfo>
        <h1>Test Only.</h1>
        <p>This Stripe payment form is only for testing purpose.</p>
        <ul>
          <li>
            Use a valid future date, such as <b>12/34</b>.
          </li>
          <li>
            Use any three-digit CVC (four digits for American Express cards).
          </li>
        </ul>
        <table>
          <tbody>
            <tr id="title">
              <td> Number</td>
              <td>Description</td>
            </tr>
            <tr>
              <td id="number">
                {successNumber}
                <HiClipboardCopy
                  id="icon"
                  onClick={() => copyCardNumber(successNumber)}
                />
              </td>
              <td id="description">
                Succeeds and immediately processes the payment.
              </td>
            </tr>
            <tr>
              <td id="number">
                {authNumber}
                <HiClipboardCopy
                  id="icon"
                  onClick={() => copyCardNumber(authNumber)}
                />
              </td>
              <td id="description">Requires authentication.</td>
            </tr>
            <tr>
              <td id="number">
                {declineNumber}
                <HiClipboardCopy
                  id="icon"
                  onClick={() => copyCardNumber(declineNumber)}
                />
              </td>
              <td id="description">
                Generic card declined and unsucessfull payment.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          For the full list of test cards check out Stripe guide on testing{" "}
          <a
            href="https://stripe.com/docs/testing"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </PaymentFormTestInfo>

      {paymentSucceeded ? (
        <Payment>
          <HiCheck />
          <h1>Test payment successfull</h1>
          <p
            onClick={() => {
              setPaymentSucceeded(false);
              setDisplayCard(true);
            }}
          >
            Try again
          </p>
        </Payment>
      ) : null}

      {paymentFailed ? (
        <Payment>
          <MdBlock />
          <h1>Test payment failed</h1>
          <p
            onClick={() => {
              setPaymentFailed(false);
              setDisplayCard(true);
            }}
          >
            Try again
          </p>
        </Payment>
      ) : null}

      {displayCard ? (
        <PaymentFormContainer>
          <form onSubmit={paymentHandler}>
            <CardElement className="card" options={cardStyle} />
            <PaymentFormButton>
              {isProcessingPayment ? (
                <PulseLoader color="#ffffff" size={5} speedMultiplier={1} />
              ) : (
                `Pay ${cartTotal}€`
              )}
            </PaymentFormButton>
          </form>
        </PaymentFormContainer>
      ) : null}
    </Container>
  );
};

export default PaymentForm;
