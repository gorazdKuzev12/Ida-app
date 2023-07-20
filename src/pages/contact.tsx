import styled from "styled-components";
import Menu from "../components/Menu";
import Footer from "@/components/Footer";

const Container = styled.div`
  height: 198vh;
  background-color: #ffffff;
`;

const Title = styled.h1`
  margin-bottom: 18px;
  color: gray;
  text-align: center;
  padding-top: 12rem;
`;
const SubTitle = styled.h1`
  margin-bottom: 8rem;
  color: gray;
  text-align: center;
  font-size: 1.3rem;
`;

const Panels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

const LeftPanel = styled.div`
  flex: 0.5;
  background-color: #004d40;
  height: 60em;
  position: relative;
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
  background-color: #f2ede6;
  height: 60em;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StoreTitle = styled.h2`
  margin-bottom: 18px;
  align-self: flex-start;
  margin-left: 6rem;
  font-size: 2rem;
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

export default function Contact() {
  return (
    <Container>
      <Menu />
      <Title>Contact</Title>
      <SubTitle>Welcome to our contact page. We are here to help.</SubTitle>

      <Panels>
        <LeftPanel>
          <ImageBehind src="/images/bg-leaves.jpg" alt="Image 1" />
          <Image src="/images/kids4.jpg" alt="Image 2" />
        </LeftPanel>
        <RightPanel>
          <StoreTitle>Visit Our Flagship Store</StoreTitle>
          <ContactInfoContainer>
            <Info>500 Terry Francine Street</Info>
            <Info>San Francisco, CA 94158</Info>
            <Info>Mail: info@mysite.com</Info>
            <Info>Tel: 123-456-7890</Info>
          </ContactInfoContainer>
          <Form>
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="email" placeholder="Email" />
            <Textarea rows={4} placeholder="Leave us a message"></Textarea>
            <Button type="submit">Submit</Button>
          </Form>
        </RightPanel>
      </Panels>
      <Footer />
    </Container>
  );
}
