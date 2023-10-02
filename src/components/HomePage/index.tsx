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
  background-image: url("/images/record.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const StaticDiv = styled.div`
  flex: 1;
  background-image: url("/images/main-img.jpg");
  background-size: cover;
  background-position: center;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 60%;
  left: 22%;
  transform: translate(-50%, -50%); // Centering
  text-align: center;
`;

const ModernText = styled.p`
  font-family: "Avenir", sans-serif; // Modern font
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Text shadow for readability
`;

const TitleText = styled.h1`
  font-family: "Montserrat", sans-serif; // Another modern font
  font-weight: 700;
  font-size: 2.5em;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 1em; // Spacing between title and other text
  cursor: pointer;
`;

export const HomePage = () => {
  return (
    <MainContainer>
      <Menu />

      <ScrollableDiv>
        {/* Other content of the scrollable div goes here */}
      </ScrollableDiv>
      <StaticDiv>
        <TextOverlay>
          <TitleText>ШТО Е THRIFTMALLMK?</TitleText>
          <ModernText>
            Купи, Продај. Облека, Книги, Плочи, Инструменти, Чевли, Накит...
          </ModernText>
        </TextOverlay>
      </StaticDiv>
    </MainContainer>
  );
};

export default HomePage;
