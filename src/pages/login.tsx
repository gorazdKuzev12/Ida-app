import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { FaUserAlt, FaLock } from "react-icons/fa"; // Importing required icons
import Footer from "@/components/Footer";

const LoginPageContainer = styled.div`
  background-color: white;
  color: #094645;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #f8f8f8;
  padding: 50px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px; // gap between child elements
  border: 3px solid #094645;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1; // allows input to take up the rest of the space
  padding: 10px 15px;
  border: 2px solid #094645;
  border-radius: 8px;
  background-color: transparent;
  font-size: 1.1rem;
  transition: border-color 0.3s, transform 0.3s;

  &:focus {
    border-color: darkgray;
    transform: scale(1.05); // subtle zoom-in effect on focus
  }
`;

const Button = styled.button`
  padding: 12px 25px;
  background-color: #094645;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: darkgray;
    transform: translateY(-3px); // subtle lift effect on hover
  }
`;

export default function Login() {
  return (
    <LoginPageContainer>
      <Menu />
      <FormContainer>
        <Title>Логин</Title>
        <InputWrapper>
          <FaUserAlt color="#094645" size={20} />
          <Input type="text" placeholder="Корисничко име или е-маил" />
        </InputWrapper>
        <InputWrapper>
          <FaLock color="#094645" size={20} />
          <Input type="password" placeholder="Лозинка" />
        </InputWrapper>
        <Button>Логирај се</Button>
      </FormContainer>
    </LoginPageContainer>
  );
}
