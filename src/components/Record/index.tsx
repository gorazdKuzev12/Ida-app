import React from "react";
import styled, { keyframes } from "styled-components";

// Define the rotation animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledRecord = styled.div`
  width: 600px;
  height: 600px;
  background-image: url("/images/beatles.png");
  background-size: cover;
  animation: ${rotate} 5s linear infinite;
  cursor: pointer;
`;

const RecordHolder = styled.div`
  width: 100%; // Take the full width of the parent div
  height: 650px; // Adjust as required
  display: flex; // Centering the record horizontally and vertically
  align-items: center;
  justify-content: center;
  background-color: #f2ede6;
`;

const VinylRecord = () => {
  return (
    <RecordHolder>
      <StyledRecord />
    </RecordHolder>
  );
};

export default VinylRecord;
