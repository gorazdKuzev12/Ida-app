import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { FaPlus } from "react-icons/fa"; // Import the Plus icon

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

const ProductImage = styled.img`
  max-width: 100%;
  display: block;
  margin: 0 auto;
`;

export default function Shop() {
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
              .fill()
              .map((_, i) => (
                <Product key={i}>
                  <ProductImage src="/images/kids3.jpg" alt="Product" />
                  <h3>Product Name</h3>
                  <p>$100</p>
                </Product>
              ))}
          </Products>
        </FilterContainer>
      </Content>
      <Footer />
    </Container>
  );
}
