import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Container = styled.div`
  background-color: #ffffff; // A natural purple shade
  padding: 20px;
  text-align: center;
  height: 90vh;
  color: gray;
`;

const Title = styled.h2`
  margin: 70px;
  color: #666666;
  font-weight: light;
  font-size: 15px; // Slightly larger font size for prominence
  letter-spacing: 1.5px; // Add some letter spacing for clarity and modern touch
  background-color: transparent; // No background for a minimalist feel
  padding: 5px 15px; // Little padding for a padded appearance
  border: none; // No borders for minimalism
  text-transform: uppercase; // Make the text uppercase for a branded feel
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 18%; // Slight reduction for margins
  height: auto;
`;

const SocialMedia = () => {
  return (
    <Container>
      <Title>Follow @thriftmallmkd on Instagram</Title>
      <ImageContainer>
        {/* Replace with your image paths */}
        <Image src="/images/kids1.jpg" alt="Instagram Image 1" />
        <Image src="/images/kids2.jpg" alt="Instagram Image 2" />
        <Image src="/images/kids3.jpg" alt="Instagram Image 3" />
        <Image src="/images/kids4.jpg" alt="Instagram Image 4" />
        <Image src="/images/kids5.jpg" alt="Instagram Image 5" />
      </ImageContainer>
    </Container>
  );
};

export default SocialMedia;
