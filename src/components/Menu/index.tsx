import React from "react";
import { StyledMenu, MenuGroup, MenuItem, Logo } from "./style";
import { FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import Link from "next/link"; // Import the Link component from next/link

const Menu = () => {
  return (
    <StyledMenu>
      <MenuGroup>
        <Link href="/">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link href="/shop">
          <MenuItem>Shop</MenuItem>
        </Link>
        <Link href="/contact">
          <MenuItem>Contact</MenuItem>
        </Link>
      </MenuGroup>
      <Logo>IDA</Logo>
      <MenuGroup>
        <Link href="/favorites">
          <MenuItem>
            <FaHeart />
          </MenuItem>
        </Link>
        <Link href="/login">
          <MenuItem>
            <FaUser />
          </MenuItem>
        </Link>
        <Link href="/cart">
          <MenuItem>
            <FaShoppingCart />
          </MenuItem>
        </Link>
      </MenuGroup>
    </StyledMenu>
  );
};
export default Menu;
