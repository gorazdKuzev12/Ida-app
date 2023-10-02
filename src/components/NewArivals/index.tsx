import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  height: 140vh;
  padding: 10px;
`;

const LeftPanel = styled.div`
  position: relative;
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
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

const NewArrivals = () => {
  return (
    <Container>
      <LeftPanel>
        <ImageWrapper>
          <Image src="/images/women.jpg" alt="Left Product Image" />
        </ImageWrapper>
        <OverlayText>ЖЕНИ</OverlayText>
      </LeftPanel>
      <RightPanel>
        <ImageWrapper>
          <Image src="/images/man.jpg" alt="Right Product Image" />
        </ImageWrapper>
        <OverlayText>МАЖИ</OverlayText>
      </RightPanel>
    </Container>
  );
};

export default NewArrivals;
