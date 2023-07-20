import React from "react";
import { StyledMenu, MenuGroup, MenuItem, Logo } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link"; // Import the Link component from next/link

const Menu = () => {
  return (
    <StyledMenu>
      <MenuGroup>
        <Link href="/">
          {" "}
          {/* Link to the home page */}
          <MenuItem>Home</MenuItem>
        </Link>
        <Link href="/shop">
          {" "}
          {/* Link to the shop page */}
          <MenuItem>Shop</MenuItem>
        </Link>
        <Link href="/contact">
          {" "}
          {/* Link to the contact page */}
          <MenuItem>Contact</MenuItem>
        </Link>
      </MenuGroup>
      <Logo>IDA</Logo>
      <MenuGroup>
        <Link href="/login">
          {" "}
          {/* Link to the login page */}
          <MenuItem>Login</MenuItem>
        </Link>
        {/* If you want to make the shopping cart clickable, wrap it in a Link as well */}
        <FaShoppingCart />
      </MenuGroup>
    </StyledMenu>
  );
};

export default Menu;
