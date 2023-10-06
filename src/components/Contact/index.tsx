import styled from "styled-components";
import React from "react";
const Container = styled.div`
  background-color: #f1f1f0;
  display: flex;
  justify-content: center; // Center children on the x axis
  align-items: center; // Center children on the y axis
  height: 100vh;
  margin: 0;
`;
const Title = styled.h1`
  margin-bottom: 18px;
  color: gray;
  text-align: center;
  padding-top: 7rem;
`;
const SubTitle = styled.h1`
  margin-bottom: 8rem;
  color: gray;
  text-align: center;
  font-size: 1.3rem;
`;

const Panels = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 4rem;
  align-items: center;
  margin: 0;
`;

const Image = styled.img`
  height: 70%;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImageBehind = styled(Image)`
  transform: translate(-40%, -40%);
`;

const RightPanel = styled.div`
  flex: 0.5;
  background-color: #e2e2e2;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StoreTitle = styled.h2`
  margin-bottom: 18px;
  align-self: flex-start;
  margin-left: 6rem;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Text shadow for readability
`;

const ContactInfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  margin-bottom: 30px;
  align-items: center;
  align-self: flex-start;
  margin-left: 6rem;
`;

const Info = styled.p`
  color: gray;
  margin: 0;
`;

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 100%;
  align-self: flex-start;
  margin-left: 6rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: gray;
`;

const Input = styled.input`
  background: transparent;
  border: 1px solid #555;
  padding: 8px 12px;
  width: 60%;
  height: 3rem;
`;

const Textarea = styled.textarea`
  background: transparent;
  border: 1px solid #555;
  padding: 8px 12px;
  width: 60%;
`;

const Button = styled.button`
  border: none;
  padding: 10px 15px;
  width: 80px;
  cursor: pointer;
  background-color: #555;
  color: white;
  &:hover {
    background-color: #777;
  }
`;
const Contact = () => {
  return (
    <Container>
      <RightPanel>
        <StoreTitle>Контактирај не. ThriftmallMK</StoreTitle>
        <ContactInfoContainer>
          <Info>Македонија</Info>
        </ContactInfoContainer>
        <Form>
          <Input type="text" placeholder="Име" />
          <Input type="text" placeholder="Презиме" />
          <Input type="email" placeholder="Е-маил" />
          <Textarea rows={4} placeholder="Остави порака"></Textarea>
          <Button type="submit">Прати</Button>
        </Form>
      </RightPanel>
    </Container>
  );
};

export default Contact;
