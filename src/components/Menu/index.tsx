import React from "react";
import { StyledMenu, MenuGroup, MenuItem, Logo } from "./style";
import { FaShoppingCart } from "react-icons/fa";
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
        <Link href="/login">
          <MenuItem>Login</MenuItem>
        </Link>
        {/* If you want to make the shopping cart clickable, wrap it in a Link as well */}

        <Link href="/cart">
          <FaShoppingCart />
        </Link>
      </MenuGroup>
    </StyledMenu>
  );
};

export default Menu;
