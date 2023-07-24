import React, { useState } from "react";
import styled from "styled-components";
import { FaCreditCard, FaCalendarAlt, FaLock } from "react-icons/fa";

const PaymentContainer = styled.div`
  font-family: "Arial", sans-serif;
  padding: 25px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 40rem;
`;

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 15px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const InputLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  & > svg {
    margin-right: 10px;
    color: #004d40;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #004d40;
  border-radius: 5px;
  background-color: #fff;
`;

const StyledButton = styled.button`
  background-color: #004d40;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  width: 100%;

  &:hover {
    background-color: #003629;
  }
`;

interface PaymentDetailsProps {
  onConfirm?: () => void;
}

export const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  onConfirm,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [billingAddress, setBillingAddress] = useState("");

  return (
    <PaymentContainer>
      <Title>Payment Details</Title>

      <InputGroup>
        <InputLabel>
          <FaCreditCard />
          Credit Card Number
        </InputLabel>
        <Input
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9101 1121"
        />
      </InputGroup>

      <InputGroup>
        <InputLabel>
          <FaCalendarAlt />
          Expiry Date
        </InputLabel>
        <Input
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
        />
      </InputGroup>

      <InputGroup>
        <InputLabel>
          <FaLock />
          CVV
        </InputLabel>
        <Input
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="123"
          maxLength={3}
        />
      </InputGroup>

      <InputGroup>
        <InputLabel>
          <FaCreditCard />
          Billing Address
        </InputLabel>
        <Input
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
          placeholder="123 Main St, City, Country"
        />
      </InputGroup>

      <StyledButton onClick={onConfirm}>Confirm Payment</StyledButton>
    </PaymentContainer>
  );
};
