import React, { useState } from "react";
import styled from "styled-components";
import { FaTruck, FaMapMarkedAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ShippingContainer = styled.div`
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

interface ShippingDetailsProps {
  onContinue?: () => void;
}

export const ShippingDetails: React.FC<ShippingDetailsProps> = ({
  onContinue,
}) => {
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <ShippingContainer>
      <Title>Shipping Details</Title>

      <InputGroup>
        <InputLabel>
          <FaMapMarkedAlt />
          Street
        </InputLabel>
        <Input value={street} onChange={(e) => setStreet(e.target.value)} />
      </InputGroup>

      <InputGroup>
        <InputLabel>
          <FaMapMarkedAlt />
          Town/City
        </InputLabel>
        <Input value={town} onChange={(e) => setTown(e.target.value)} />
      </InputGroup>

      <InputGroup>
        <InputLabel>
          <FaMapMarkedAlt />
          Zip Code
        </InputLabel>
        <Input value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
      </InputGroup>

      <InputGroup>
        <InputLabel>
          <FaMapMarkedAlt />
          Country
        </InputLabel>
        <Input value={country} onChange={(e) => setCountry(e.target.value)} />
      </InputGroup>

      <InputGroup>
        <InputLabel>
          <FaPhone />
          Phone Number
        </InputLabel>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </InputGroup>

      <InputGroup>
        <InputLabel>
          <FaEnvelope />
          Email Address
        </InputLabel>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </InputGroup>

      <InputGroup>
        <InputLabel>
          <FaTruck />
          Shipping Option
        </InputLabel>
        <select
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #004d40",
            borderRadius: "5px",
            backgroundColor: "#fff",
          }}
        >
          <option>Standard Shipping - $5</option>
          <option>Express Shipping - $10</option>
        </select>
      </InputGroup>

      <StyledButton onClick={onContinue}>Continue to Payment</StyledButton>
    </ShippingContainer>
  );
};
