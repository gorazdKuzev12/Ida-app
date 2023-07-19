import React from "react";
import { StyledMenu, MenuGroup, MenuItem, Logo } from "./style";
import { FaShoppingCart } from "react-icons/fa";

const Menu = () => {
  return (
    <StyledMenu>
      <MenuGroup>
        <MenuItem>Home</MenuItem>
        <MenuItem>Shop</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuGroup>
      <Logo>IDA</Logo>
      <MenuGroup>
        <MenuItem>Login</MenuItem>
        <FaShoppingCart />
      </MenuGroup>
    </StyledMenu>
  );
};

export default Menu;
