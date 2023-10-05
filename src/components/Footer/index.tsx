import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.div`
  background-color: #f2ede6; // A natural purple shade
  padding: 20px;
  text-align: center;
  height: 40vh;
  color: gray;
`;

const Rights = styled.p`
  margin-top: 20px;
  font-size: 0.9em;
  opacity: 0.8;
`;
const Subtitle = styled.h3`
  margin-top: 35px;

  margin-bottom: 50px;
  font-family: "Montserrat", sans-serif; // Another modern font
  font-weight: 700;
  font-size: 2.5em;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  font-size: 1.5em;
  color: inherit;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Subtitle>THRIFTMALLMK</Subtitle>
      <p>Subscribe for Updates & Special Offers</p>
      <IconContainer>
        <SocialIcon href="https://instagram.com/ida__kids">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://facebook.com/ida_kids_page">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon href="mailto:contact@ida-kids.com">
          <FaEnvelope />
        </SocialIcon>
      </IconContainer>
      <Rights>
        &copy; {new Date().getFullYear()} IDA Kids. All rights reserved.
      </Rights>
    </FooterContainer>
  );
};

export default Footer;
