import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <NavBarSt>
      <LogoContainer>
        <img src="logos/logo-1024.png" alt="logo" />
        <span className="my-black">Daniel Aguilera</span>
      </LogoContainer>
      <MenuItems>
        <Items>
            <Link to="About" className="no-underline color-inherit">
                Me
            </Link>
        </Items>
        <Items>Thoughts</Items>
        <Items>Babies</Items>
        <Items>Coffee?</Items>
      </MenuItems>
    </NavBarSt>
  );
};

export default NavBar;

// STYLES
const NavBarSt = styled.div.attrs(() => ({
    className: "b--white-20 w-100 flex items-center"
}))`height: 4rem;`;

const LogoContainer = styled.div.attrs(() => ({
    className: "inline-flex items-center ph4 h-inherit w-inherit"
}))`
    img{
        height: 70%;
    }
    span{
        margin-left: 10px;
        font-size: 1.8rem;
    }
`;


const MenuItems = styled.ul.attrs(() => ({
    className: "inline-flex flex-auto ma0 f3 my-black list justify-end pr4"
}))``;

const Items = styled.li.attrs(() => ({
    className: "ph3"
}))`
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        color: gray;
    }
`;