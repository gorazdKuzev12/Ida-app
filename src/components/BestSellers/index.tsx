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
  display: flex;
  height: 110vh;
`;

const LeftPanel = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  position: relative;
  background-color: #f7f5f5;
  cursor: pointer;
  img {
    width: 60%;
    height: 70%;
    object-fit: cover;
    display: block;
    margin: 15% auto 0;
  }
`;

const BestSellerLabel = styled.div`
  position: absolute;
  top: 20%; // Adjust as necessary
  left: 50%;
  transform: translateX(-50%);
  font-size: 2em;
  animation: ${fadeIn} 1s ease-out forwards;
`;

const ViewMore = styled.a`
  display: block;
  margin-top: 10px;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;

const BestSeller = () => {
  return (
    <Container>
      <LeftPanel>
        <img src="/images/kids2.jpg" alt="Best Seller Left" />
      </LeftPanel>
      <RightPanel>
        <BestSellerLabel>KIDS</BestSellerLabel>
        <img src="/images/kids8.jpg" alt="Best Seller Right" />
        <ViewMore>View More</ViewMore>
      </RightPanel>
    </Container>
  );
};

export default BestSeller;
