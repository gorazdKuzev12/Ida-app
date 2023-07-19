import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  height: 140vh;
  padding: 20px;
`;

const LeftPanel = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightPanel = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 70%;
  height: auto;
`;

const LeftImage = styled(Image)`
  max-height: 70%;
`;

const RightImage = styled(Image)`
  max-height: 55%;
`;

const DiscountText = styled.div`
  margin-top: 10px;
  font-size: 1.5em;
  font-weight: bold;
  color: gray;
`;

const ShopNow = styled.a`
  margin-top: 10px;
  cursor: pointer;
  text-decoration: underline;
  color: gray;
`;

const NewArrivalsText = styled.div`
  margin-top: 10px;
  font-size: 1.5em;
  font-weight: bold;
  color: gray;
`;

const NewArrivals = () => {
  return (
    <Container>
      <LeftPanel>
        <LeftImage src="/images/kids4.jpg" alt="Left Product Image" />
        <DiscountText>25% Off all Jeans</DiscountText>
        <ShopNow>Shop now</ShopNow>
      </LeftPanel>
      <RightPanel>
        <RightImage src="/images/kids5.jpg" alt="Right Product Image" />
        <NewArrivalsText>Introducing out new colection</NewArrivalsText>
      </RightPanel>
    </Container>
  );
};

export default NewArrivals;
