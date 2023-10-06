import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Menu from "../components/Menu";
import Footer from "@/components/Footer";

// Page Container
const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  min-height: 100vh;
  padding-left: 4.4rem;
  padding-right: 4.4rem;
`;

// Favorites Header
const FavoritesHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(180deg, #ffffff 70%, #f4f4f4 20%);
  border-bottom: 1px solid #e0e0e0;
  padding-top: 12rem;
  width: 100%;
`;

const FavoritesTitle = styled.h1`
  font-size: 1.8rem;
  color: #094645;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 2rem 0;
  background-color: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f2f2f2;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 160px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 5px;
`;

const ProductName = styled.span`
  flex: 2;
  font-size: 1.4rem;
  color: #333;
`;

const RemoveFromFavorites = styled.div`
  font-size: 1.4rem;
  color: #666;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #444;
  }
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductSize = styled.span`
  font-size: 1.1rem;
  color: #777;
  margin-top: 0.5rem;
`;

const ProductPrice = styled.span`
  font-size: 1.3rem;
  color: #555;
  margin-top: 1rem;
  font-weight: bold;
`;

export default function Favorites() {
  const products = [
    {
      id: 1,
      name: "Favorite T-shirt",
      imageUrl: "/images/kids1.jpg",
      size: "M",
      price: "$29.99",
    },
    {
      id: 2,
      name: "Cool Sneakers",
      imageUrl: "/images/kids2.jpg",
      size: "42",
      price: "$89.99",
    },
    {
      id: 3,
      name: "Elegant Hat",
      imageUrl: "/images/kids3.jpg",
      size: "L",
      price: "$19.99",
    },
    // ... other products
  ];

  return (
    <div>
      <Menu />
      <FavoritesContainer>
        <FavoritesHeader>
          <FavoritesTitle>Зачувани</FavoritesTitle>
        </FavoritesHeader>
        <ProductList>
          {products.map((product) => (
            <ProductItem key={product.id}>
              <ProductImage src={product.imageUrl} alt={product.name} />
              <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <ProductSize>Size: {product.size}</ProductSize>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductDetails>
              <RemoveFromFavorites>
                <FaTimes />
              </RemoveFromFavorites>
            </ProductItem>
          ))}
        </ProductList>
      </FavoritesContainer>
      <Footer />
    </div>
  );
}
