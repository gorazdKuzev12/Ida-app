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
  display: flex;
  flex-direction: row;
`;
const FilterBoxContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 100%; // Ensure this is stretching as per your layout requirement
  max-width: 1000px; // Example max-width, adjust as per your design
  margin: 0 auto; // Centering the container if it has a max-width
  padding: 30px;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px; // Ensure the max-width is the same as FilterBoxContainer
  margin: 0 auto; // Centering the container
`;

const Filters = styled.div`
  width: 250px;
  margin-right: 50px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin-top: 50px;
  width: 300px;
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

const Product = styled.div`
  flex-basis: 10%;
  text-align: center;
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
  height: 350px; // Assuming an image height, adjust as needed

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
  width: 250px;
  margin-left: 30px;

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

interface FilterBoxProps {
  isSelected: boolean;
}

const FilterBox = styled.div<FilterBoxProps>`
  border: 1px solid #ccc;
  padding: 5px;
  width: 300px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${(props) => (props.isSelected ? "#094645" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};

  &:hover {
    background-color: #aaa;
    color: #fff;
  }
`;

const FilterProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Shop() {
  const productData = {
    size: "M",
    colors: ["black", "gray", "yellow"],
  };
  const [selectedFilter, setSelectedFilter] = useState("ОБЛЕКА");
  const filters = ["ОБЛЕКА", "КНИГИ", "ПЛОЧИ", "ИНТРУМЕНТИ"];
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
        <FilterContainer>
          <Filters>
            <FilterLabel>Филтрирај:</FilterLabel>
            <Filter>
              <span>Категорија</span>
              <FaPlus size={24} />
            </Filter>
            <Filter>
              <span>Цена</span>
              <FaPlus size={24} />
            </Filter>
            <Filter>
              <span>Боја</span>
              <FaPlus size={24} />
            </Filter>
            <Filter>
              <span>Величина</span>
              <FaPlus size={24} />
            </Filter>
          </Filters>
        </FilterContainer>

        <FilterProductsContainer>
          <FilterBoxContainer>
            {filters.map((filter) => (
              <FilterBox
                key={filter}
                isSelected={filter === selectedFilter}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </FilterBox>
            ))}
          </FilterBoxContainer>
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
                    Додај во кошичка
                  </AddToCartButton>
                </Product>
              ))}
          </Products>{" "}
        </FilterProductsContainer>
      </Content>
      <Footer />
    </Container>
  );
}
