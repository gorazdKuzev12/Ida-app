import React, { useState } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import {
  FaHeart,
  FaShoppingCart,
  FaPlus,
  FaCircle,
  FaTag,
} from "react-icons/fa";
import Heart from "@/components/Heart";

const Container = styled.div`
  background-color: white;
  color: gray;
`;

const Content = styled.div`
  padding: 100px;
  background-color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  margin-top: 60px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
`;

const Filters = styled.div`
  width: 25%;
  margin-right: 50px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;

const FilterLabel = styled.div`
  font-size: 2rem;
  text-decoration: underline;
  border-bottom: 1px solid gray;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: left; // Align text to the left
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between; // Text will be on left, Icon on right
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 1.4rem;

  margin-right: 0px;
  border-bottom: 1px solid gray;
  width: 100%;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Product = styled.div`
  flex-basis: calc(33.3333% - 20px);
  text-align: center;
  padding: 10px;
  margin-bottom: 30px;
`;

const ColorIcon = styled(FaCircle)`
  color: ${(props) => props.color || "gray"};
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left;
`;

const Price = styled.p`
  font-weight: bold;
  text-align: right;
`;

const SizeAndColors = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 10px;
`;

const Size = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ScrollableImages = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 500px; // Assuming an image height, adjust as needed

  /* For Firefox */
  scrollbar-width: thin;
  scrollbar-color: #797979 #d6d5d5;

  /* For Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b7b6b6;
    border-radius: 10px; // Round the corners if you like
  }

  &::-webkit-scrollbar-track {
    background-color: #e3e2e2;
  }
`;

const ScrollableImage = styled.img`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 550px;
  width: 300px;

  margin-right: 3px; // This creates the 3px space between the image and scrollbar

  scroll-snap-align: start; // Ensures smooth scrolling between images
  transition: transform 0.3s ease;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between; // Align product name left & price right
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 10px 0;
`;

const Colors = styled.div`
  display: flex;
  gap: 10px;
`;

const AddToCartButton = styled.button`
  margin-top: 10px;
  border: 1px solid gray;
  background-color: white;
  color: gray;
  width: 100%;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: gray;
    color: white;
  }
`;

const ProductImageContainer = styled.div`
  position: relative; // This is crucial for the absolute positioning of the Heart.
  margin-right: 30px;
`;

const HeartContainer = styled.div`
  position: absolute;
  top: 10px; // Adjust as necessary for positioning
  right: 60px; // Adjust as necessary for positioning
  z-index: 10; // To ensure the heart stays above the image
`;

export default function Shop() {
  const productData = {
    size: "M",
    colors: ["black", "gray", "yellow"],
  };
  const productImages = [
    "/images/kids1.jpg",
    "/images/kids2.jpg",
    "/images/kids3.jpg",
    // ... add as many images as needed for each product
  ];
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Container>
      <Menu />
      <Content>
        <Title>Shop Our Collection</Title>
        <Subtitle>Discover the best products curated just for you</Subtitle>

        <FilterContainer>
          <Filters>
            <FilterLabel>Filter by</FilterLabel>
            <Filter>
              <span>Category</span>
              <FaPlus size={24} />
            </Filter>
            <Filter>
              <span>Price</span>
              <FaPlus size={24} />
            </Filter>
            <Filter>
              <span>Color</span>
              <FaPlus size={24} />
            </Filter>
            <Filter>
              <span>Size</span>
              <FaPlus size={24} />
            </Filter>
          </Filters>
          <Products>
            {Array(12)
              .fill(null)
              .map((_, i) => (
                <Product key={i}>
                  <ProductImageContainer>
                    <HeartContainer>
                      <Heart
                        isLiked={isLiked}
                        onClick={() => setIsLiked(!isLiked)}
                      />
                    </HeartContainer>

                    <ScrollableImages>
                      {productImages.map((imgSrc, index) => (
                        <ScrollableImage
                          key={index}
                          src={imgSrc}
                          alt={`Product ${i} - Image ${index}`}
                        />
                      ))}
                    </ScrollableImages>
                  </ProductImageContainer>
                  <ProductInfo>
                    <ProductName>T-Shirt</ProductName>
                    <Price>$100</Price>
                  </ProductInfo>
                  <SizeAndColors>
                    <Size>
                      <FaTag /> M
                    </Size>
                    <Colors>
                      <ColorIcon color="black" />
                      <ColorIcon color="blue" />
                      <ColorIcon color="gray" />
                    </Colors>
                  </SizeAndColors>
                  <AddToCartButton>
                    <FaShoppingCart />
                    Add to Cart
                  </AddToCartButton>
                </Product>
              ))}
          </Products>{" "}
        </FilterContainer>
      </Content>
      <Footer />
    </Container>
  );
}
