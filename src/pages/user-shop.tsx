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
import { AiOutlineGlobal, AiFillStar, AiOutlineUser } from "react-icons/ai";

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

const FilterAvailabilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 30px;
  padding: 15px;
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

interface FilterBoxProps {
  isSelected: boolean;
}

const FilteravailableBox = styled.div<FilterBoxProps>`
  width: 30px;
  border: 1px solid #ccc;
  padding: 5px;
  margin-bottom: 10px;
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
export const VerticalText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Letter = styled.span`
  /* Additional styles for each letter if needed */
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* border-right: 1px solid #ddd;
  padding-right: 30px; */
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const UserName = styled.h2`
  margin: 5px 0;
  font-size: 1.2rem;
  color: #333;
`;

const ShopName = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #555;
`;

const JoinedDate = styled.p`
  margin: 5px 0;
  font-size: 0.8rem;
  color: #888;
`;

const AdditionalInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column; // Adjusted to column
  gap: 15px; // Adjusted gap for vertical spacing
  font-size: 0.9rem;
  color: #555;
  width: 100%;
  align-items: center; // Aligns items horizontally in the center

  padding: 10px 0;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  width: 100%;
  padding: 1.5rem;
`;

const IconContainer = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: #4a4a4a;
`;

const InfoLabel = styled.span`
  font-size: 0.9rem;
  margin-right: 5px;
  color: #333;
`;

const InfoValue = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #666;
`;
const DetailsInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;
const NewProductButton = styled.button`
  background-color: #094645; // Set background color
  color: #fff; // White text
  padding: 10px 20px; // Padding for size
  border: none; // Remove default border
  width: 100%; //
  cursor: pointer; // Cursor style on hover
  font-size: 1rem; // Text size
  margin-top: 1.5rem;
  transition: background-color 0.3s ease; // Smooth color transition on hover

  &:hover {
    background-color: #076b5c; // Slightly lighter green on hover
  }

  &:disabled {
    background-color: #637373; // Gray out when disabled
    cursor: not-allowed; // Show not-allowed cursor when disabled
  }
`;
export default function Shop() {
  const productData = {
    size: "M",
    colors: ["black", "gray", "yellow"],
  };
  const [selectedFilter, setSelectedFilter] = useState("ОБЛЕКА");
  const [selectedAvailableFilter, setSelectedAvailableFilter] = useState("");

  const filters = ["ОБЛЕКА", "КНИГИ", "ПЛОЧИ", "ИНТРУМЕНТИ"];
  const availableFilters = [
    " ПРОДАДЕНО",
    "ДОСТАПНО",
    "РЕЗЕРВИРАНО",
    "ОЧЕКУВАЊЕ",
  ];

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
        <ProfileContainer>
          <DetailsInfo>
            <Image src="/images/kids1.jpg" alt="User Name" />
            <div>
              <UserName>Book Shop</UserName>
              <ShopName>Gorazd Kuzev</ShopName>
              <JoinedDate>Joined: January 2021</JoinedDate>
            </div>
          </DetailsInfo>
          <NewProductButton>Додај нов продукт</NewProductButton>{" "}
          <AdditionalInfo>
            <InfoItem>
              <IconContainer>
                <AiOutlineGlobal />
              </IconContainer>
              <div>
                <InfoLabel>Location</InfoLabel>
                <InfoValue>New York, USA</InfoValue>
              </div>
            </InfoItem>

            <InfoItem>
              <IconContainer>
                <AiOutlineUser />
              </IconContainer>
              <div>
                <InfoLabel>Followers</InfoLabel>
                <InfoValue>1.2K</InfoValue>
              </div>
            </InfoItem>
            <InfoItem>
              <IconContainer>
                <AiFillStar />
              </IconContainer>
              <div>
                <InfoLabel>Rating</InfoLabel>
                <InfoValue>4.5/5</InfoValue>
              </div>
            </InfoItem>
          </AdditionalInfo>
        </ProfileContainer>

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
                </Product>
              ))}
          </Products>{" "}
        </FilterProductsContainer>
        <FilterAvailabilityContainer>
          {availableFilters.map((filter) => (
            <FilteravailableBox
              key={filter}
              isSelected={filter === selectedAvailableFilter}
              onClick={() => setSelectedAvailableFilter(filter)}
            >
              <VerticalText>
                {filter.split("").map((letter, index) => (
                  <Letter key={index}>{letter.toUpperCase()}</Letter>
                ))}
              </VerticalText>
            </FilteravailableBox>
          ))}
        </FilterAvailabilityContainer>
      </Content>
      <Footer />
    </Container>
  );
}
