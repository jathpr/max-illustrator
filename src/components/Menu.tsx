import styled from "@emotion/styled";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Fragment, useState } from "react";
import React from "react";
import { LinkItem } from "./LinkItem";

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
    <MenuWrapper onClick={() => setOpened(!opened)}>
      <MenuBody>
        <MenuList>
          <MenuItem to="/works">Works</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/contacts">Contacts</MenuItem>
        </MenuList>
        <Links>
          <LinkItem linkPage="./" source="../images/menu/instagram.png" alt="1" />
          <LinkItem linkPage="./" source="../images/menu/facebook.png" alt="1" />
          <LinkItem linkPage="./" source="../images/menu/twitter.png" alt="1" />
          {/* <Instagram /> */}
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
    border: 2px solid red;
`;
const MenuBody = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  // width: 300px;
  background-color: white;
    border: 2px solid green;

`;
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
    border: 2px solid blue;
`;
const Links = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
    border: 2px solid blue;
  `;
const Instagram = styled.div``; //can be moved to other component

// const LinkItem = styled.a `
// background-image: #000;
// `;

const MenuItem = styled(Link)`
  padding: 0.5rem 3rem;
  font-size: 3rem;  
  text-decoration: none;
  color: #555;
  transition: 0.2s;
  :hover {
    color: #000;
    transition: 0.2s;
  }
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
