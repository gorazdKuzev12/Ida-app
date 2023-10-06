import React, { useState } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import {
  FaStore,
  FaTshirt,
  FaBook,
  FaGuitar,
  FaRecordVinyl,
} from "react-icons/fa";

const Container = styled.div`
  background-color: white;
  color: gray;
`;

const Content = styled.div`
  padding: 100px;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const FilterBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 25%;
  padding: 20px;
  border-right: 1px solid #ddd;
`;

interface FilterBoxProps {
  isSelected: boolean;
}

const FilterLabel = styled.h4`
  color: #ffffff;
  background-color: #094645;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FilterBox = styled.div<FilterBoxProps>`
  display: flex;
  align-items: center;
  gap: 15px;
  border-top: ${(props) =>
    props.isSelected ? "3px solid #094645" : "1px solid gray"};
  border-bottom: ${(props) =>
    props.isSelected ? "3px solid #094645" : "1px solid gray"};
  padding: 10px;
  width: 100%;
  background-color: ${(props) => (props.isSelected ? "#f0f0f0" : "#fff")};
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 5px;
`;

const StyledIcon = styled.div<FilterBoxProps>`
  color: ${(props) => (props.isSelected ? "#094645" : "gray")};
`;

const ShopsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ShopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 80px;
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

export default function NewPage() {
  const [selectedMainFilter, setSelectedMainFilter] = useState("");
  const [selectedSecondaryFilter, setSelectedSecondaryFilter] = useState("");

  const mainFilters = [
    { label: "Најпопуларни", icon: <FaStore /> },
    { label: "Најнови", icon: <FaStore /> },
    { label: "Најстари", icon: <FaStore /> },
    { label: "Препорачани", icon: <FaStore /> },
  ];

  const secondaryFilters = [
    { label: "Книги", icon: <FaBook /> },
    { label: "Плочи", icon: <FaRecordVinyl /> },
    { label: "Облека", icon: <FaTshirt /> },
    { label: "Накит", icon: <FaGuitar /> },
  ];

  return (
    <Container>
      <Menu />
      <Content>
        <FilterBoxContainer>
          <FilterLabel>
            <FaStore /> ПРОДАВНИЦИ
          </FilterLabel>
          {mainFilters.map((filter) => (
            <FilterBox
              key={filter.label}
              isSelected={filter.label === selectedMainFilter}
              onClick={() => setSelectedMainFilter(filter.label)}
            >
              <StyledIcon isSelected={filter.label === selectedMainFilter}>
                {filter.icon}
              </StyledIcon>
              {filter.label}
            </FilterBox>
          ))}

          <FilterLabel>
            <FaBook /> Продукти
          </FilterLabel>
          {secondaryFilters.map((filter) => (
            <FilterBox
              key={filter.label}
              isSelected={filter.label === selectedSecondaryFilter}
              onClick={() => setSelectedSecondaryFilter(filter.label)}
            >
              <StyledIcon isSelected={filter.label === selectedSecondaryFilter}>
                {filter.icon}
              </StyledIcon>
              {filter.label}
            </FilterBox>
          ))}
        </FilterBoxContainer>

        <ShopsContainer>
          {Array(12)
            .fill(null)
            .map((_, i) => (
              <ShopBox key={i}>
                <Image src="/images/kids1.jpg" alt="Shop Image" />
                <UserName>Book Shop</UserName>
                <ShopName>Gorazd Kuzev</ShopName>
                <JoinedDate>Joined: January 2021</JoinedDate>
              </ShopBox>
            ))}
        </ShopsContainer>
      </Content>
      <Footer />
    </Container>
  );
}
