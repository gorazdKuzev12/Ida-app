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
  gap: 35px;
`;

export const MenuItem = styled.p`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

export const Logo = styled.div`
  font-weight: bold;
  margin-right: 100px;
`;
