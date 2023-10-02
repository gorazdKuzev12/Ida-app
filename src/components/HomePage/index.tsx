import styled from "styled-components";
import Menu from "../Menu";

const MainContainer = styled.div`
  display: flex;
  height: 140vh;
  overflow: hidden;
`;

const ScrollableDiv = styled.div`
  flex: 1;
  overflow-y: auto;
  background-image: url("/images/kids3.jpg"); // Updated path
  background-size: cover;
  background-position: center;
  background-attachment: fixed; // For the parallax effect
`;

const StaticDiv = styled.div`
  flex: 1;
  background-image: url("/images/main-img.jpg"); // Assuming there's a second image
  background-size: cover;
  background-position: center;
`;

export const HomePage = () => {
  return (
    <MainContainer>
      <ScrollableDiv>
        <Menu />
        {/* Other content of the scrollable div goes here */}
      </ScrollableDiv>
      <StaticDiv />
    </MainContainer>
  );
};

export default HomePage;
