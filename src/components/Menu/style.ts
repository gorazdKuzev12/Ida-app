import styled from "styled-components";
export const StyledMenu = styled.div`
  position: absolute;
  top: 25px;
  height: 30px;
  width: 90%;
  left: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2ede6;
  padding: 35px 15px; // Add some padding to give space to menu items
  color: gray;

  font-size: 18px;
`;

export const MenuGroup = styled.div`
  display: flex;
  gap: 30px;
`;

export const MenuItem = styled.p`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-family: "Lato", sans-serif;
`;

export const Logo = styled.div`
  display: inline-block;
  font-weight: light;
  font-size: 20px; // Slightly larger font size for prominence
  letter-spacing: 3px; // Add some letter spacing for clarity and modern touch
  color: #757474; // Modern neutral dark color
  background-color: transparent; // No background for a minimalist feel
  padding: 5px 15px; // Little padding for a padded appearance
  border: none; // No borders for minimalism
  text-transform: uppercase; // Make the text uppercase for a branded feel
  margin-left: -360px;
`;
