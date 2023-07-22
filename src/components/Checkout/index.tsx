import React, { useState } from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
  font-family: "Arial", sans-serif;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 40rem;
`;

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
`;

interface RowProps {
  noBorder?: boolean;
}
const Row = styled.div<RowProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 35px;
  padding-top: 35px;

  border-bottom: ${(props) => (props.noBorder ? "none" : "1px solid #e0e0e0")};
`;

const PromoCodeInput = styled.input`
  padding: 8px;
  border: 1px solid #003629;
  border-radius: 5px;
  margin-top: 5px;
  background-color: #fff;
`;

interface ValueProps {
  bold?: boolean;
}

const Value = styled.span<ValueProps>`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

const CheckoutButton = styled.button`
  background-color: #004d40;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003629;
  }
`;

interface CheckoutSummaryProps {
  subtotal: number;
  shipping: number;
  fee: number;
  onCheckout?: () => void; // Optional callback for when the checkout button is clicked
}

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  subtotal,
  shipping,
  fee,
  onCheckout,
}) => {
  const [promoCode, setPromoCode] = useState("");

  const total = subtotal + shipping + fee;

  return (
    <SummaryContainer>
      <Title>Checkout Summary</Title>

      <Row>
        <span>Do you have a promo code?</span>
        <PromoCodeInput
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter Promo Code"
        />
      </Row>

      <Row>
        <span>Subtotal</span>
        <Value>${subtotal}</Value>
      </Row>

      <Row>
        <span>Estimated Shipping</span>
        <Value>${shipping}</Value>
      </Row>

      <Row>
        <span>Fee</span>
        <Value>${fee}</Value>
      </Row>

      <Row noBorder>
        <span>Total</span>
        <Value bold>${total}</Value>
      </Row>

      <CheckoutButton onClick={onCheckout}>Checkout</CheckoutButton>
    </SummaryContainer>
  );
};
