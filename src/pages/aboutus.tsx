import styled from "styled-components";
import Menu from "../components/Menu";
import Footer from "@/components/Footer";

const Container = styled.div`
  height: 170vh;
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
  padding-top: 7rem;
  padding-bottom: 1rem;
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
  height: 70em;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const StoreTitle = styled.h2`
  font-size: 2.5rem;
  color: #004d40;
  margin-bottom: 2rem;
`;

const PurposeText = styled.p`
  color: #333;
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  span {
    font-weight: bold;
    color: #004d40;
  }
`;
export default function AboutUs() {
  return (
    <Container>
      <Menu />

      <Panels>
        <LeftPanel>
          <Image src="/images/aboutus.jpg" alt="Image 2" />
        </LeftPanel>
        <RightPanel>
          <StoreTitle>Welcome to ThriftmallMK</StoreTitle>
          <PurposeText>
            Discover a universe of stores right at your fingertips. At
            ThriftmallMK, our vision is simple: <span>Empower creativity</span>.
            Whether you're into books, fashion, or exploring the unique charm of
            handmade crafts, this is your haven. Dive into a world where local
            brands shine and every store tells its own story. Join us in
            reshaping the way we shop. Welcome to the future of e-commerce.
          </PurposeText>
        </RightPanel>
      </Panels>
      <Footer />
    </Container>
  );
}
