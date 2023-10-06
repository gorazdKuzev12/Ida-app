import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const TopBanner = styled.div`
  flex: 2;
  background-color: #f79791;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WelcomeText = styled.h1`
  color: #d83967;
  margin-bottom: 20px;
`;

const WelcomeSubText = styled.p`
  font-size: 24px;
  color: #643a45;
`;

const MidSection = styled.div`
  flex: 3;
  display: flex;
  background-color: #87d6ec;
`;

const LeftImageContainer = styled.div`
  flex: 1;
  background-color: #f89fa1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 80%;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: white;
`;

const Text = styled.p`
  color: white;
`;

const BottomSection = styled.div`
  flex: 2;
  display: flex;
  background-color: #c8c5c6;
`;

const RightImageContainer = styled(LeftImageContainer)`
  background-color: #eae0e2;
`;

const Content = styled.div`
  background-color: white;
  margin-top: 100px;
`;

const AboutUs = () => {
  return (
    <Container>
      <Menu />
      <Content>
        <TopBanner>
          <WelcomeText>Welcome to ThriftmallMK</WelcomeText>
          <WelcomeSubText>
            A leading platform in Macedonia for thrift shopping.
          </WelcomeSubText>
        </TopBanner>
        <MidSection>
          <LeftImageContainer>
            <Image src="path-to-your-left-image.jpg" alt="Image Description" />
          </LeftImageContainer>
          <TextContainer>
            <Title>About Us</Title>
            <Text>
              ThriftmallMK stands as Macedonia's premier thrift shopping
              platform. We're here to provide unparalleled experiences to our
              community.
            </Text>
          </TextContainer>
        </MidSection>
        <BottomSection>
          <TextContainer>
            <Text>
              We're committed to ensuring quality and trust in every
              transaction, fostering a space of sustainable and cherished thrift
              shopping.
            </Text>
          </TextContainer>
          <RightImageContainer>
            <Image src="/images/kids1.jpg" alt="Image Description" />
          </RightImageContainer>
        </BottomSection>
      </Content>
      <Footer />
    </Container>
  );
};

export default AboutUs;
