import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <NavBarSt>
      <LogoContainer>
        <img src="logos/logo-1024.png" alt="logo" />
        <span className="white">Daniel Aguilera</span>
      </LogoContainer>
      <MenuItems>
        <Items>
          <Link to="aboutme" className="no-underline color-inherit">
            Me
          </Link>
        </Items>
        <Items>
          <Link to="blog" className="no-underline color-inherit">
            Thoughts
          </Link>
        </Items>
        <Items>
          <Link to="projects" className="no-underline color-inherit">
            Projects
          </Link>
        </Items>
        <Items>
          <a href="https://www.buymeacoffee.com/Eaglewas" rel="noopener noreferrer" target="_blank" className="no-underline color-inherit">
            Coffee?
          </a>
        </Items>
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
    className: "inline-flex flex-auto ma0 f3 white list justify-end pr4"
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