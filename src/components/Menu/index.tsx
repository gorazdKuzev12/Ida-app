import React from "react";
import { StyledMenu, MenuGroup, MenuItem, Logo } from "./style";
import { FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import Link from "next/link"; // Import the Link component from next/link

const Menu = () => {
  return (
    <StyledMenu>
      <MenuGroup>
        <Link href="/">
          <MenuItem>Почетна</MenuItem>
        </Link>
        <Link href="/shop">
          <MenuItem>Купи</MenuItem>
        </Link>
        <Link href="/user-shop">
          <MenuItem>Моја продавница</MenuItem>
        </Link>
        <Link href="/shops">
          <MenuItem>Продавници</MenuItem>
        </Link>
        <Link href="/aboutus">
          <MenuItem>За нас</MenuItem>
        </Link>
      </MenuGroup>
      <Logo>ПРОДАВНИЦАМК</Logo>
      <MenuGroup>
        <Link href="/favorites">
          <MenuItem>
            <FaHeart />
          </MenuItem>
        </Link>

        <Link href="/cart">
          <MenuItem>
            <FaShoppingCart />
          </MenuItem>
        </Link>
        <Link href="/login">
          <MenuItem>
            <FaUser />
          </MenuItem>
        </Link>
      </MenuGroup>
    </StyledMenu>
  );
};
export default Menu;
