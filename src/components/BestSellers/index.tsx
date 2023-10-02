import styled, { keyframes } from "styled-components";

// Animation for "BEST SELLER" label
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  background-color: #f1f1f0;
  display: flex;
  justify-content: space-between;
  height: 140vh;
`;

const LeftPanel = styled.div`
  position: relative;
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; /* Updated */
  height: 100%; /* Updated */
`;

const RightPanel = styled.div`
  position: relative;
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 72%;
  height: 70%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
const StaticImage = styled.img`
  width: 100%;
  height: 100%; /* Updated */
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 2em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const BestSeller = () => {
  return (
    <Container>
      <LeftPanel>
        <StaticImage src="/images/record-gray.jpg" alt="Right Product Image" />
      </LeftPanel>
      <RightPanel>
        <ImageWrapper>
          <Image src="/images/record-player.jpg" alt="Right Product Image" />
        </ImageWrapper>
        <OverlayText>КНИГИ</OverlayText>
      </RightPanel>
    </Container>
  );
};

export default BestSeller;
