import styled from "@emotion/styled";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Fragment, useState } from "react";
import React from "react";
import { LinkItem } from "./LinkItem";
import "./menu.css";

export const Menu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Fragment>
      <MenuButton onClick={() => setExpanded(!expanded)}>
        <StaticImage src="../images/menu.png" alt="not A dinosaur" />
      </MenuButton>
      {expanded && <ExpandedMenu />}
    </Fragment>
  );
};

const ExpandedMenu = () => {
  const [opened, setOpened] = useState(false);
  { if (opened === true) return null }

  return (
    <MenuWrapper className="menu-wrapper" onClick={() => setOpened(!opened)}>
      <MenuBody className="menu-body">
        <MenuList className="menu-list">
          <MenuItem className="menu__item" to="/works">Works</MenuItem>
          <MenuItem className="menu__item" to="/about">About</MenuItem>
          <MenuItem className="menu__item" to="/contacts">Contacts</MenuItem>
        </MenuList>
        <Links className="menu-links">
          <LinkItem linkPage="./" source="../images/menu/instagram.png" alt="instagram" />
          <LinkItem linkPage="./" source="../images/menu/facebook.png" alt="facebook" />
          <LinkItem linkPage="./" source="../images/menu/twitter.png" alt="twitter" />
        </Links>
      </MenuBody>
    </MenuWrapper>

  )
};

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;
const MenuBody = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
`;
const MenuList = styled.div`
  padding: 0rem 1.5rem;
  display: flex;
  flex-direction: column;
  // align-items: end;
    
`;
const Links = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
    
  `;
const MenuItem = styled(Link)`
  padding: 1rem 0rem;
  width: 100%;
  font-size: 3rem;  
  text-decoration: none;
  color: #555;
`;
const MenuButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
`;
