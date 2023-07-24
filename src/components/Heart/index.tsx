import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

type HeartProps = {
  isLiked: boolean;
  onClick: () => void;
};

const StyledHeart = styled(FaHeart)<{ isLiked: boolean }>`
  color: ${(props) => (props.isLiked ? "pink" : "white")};
  cursor: pointer;
  transition: color 0.3s ease;
`;

const Heart: React.FC<HeartProps> = ({ isLiked, onClick }) => {
  return <StyledHeart isLiked={isLiked} onClick={onClick} />;
};

export default Heart;
