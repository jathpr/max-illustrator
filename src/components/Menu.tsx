import styled from "@emotion/styled";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Fragment, useState } from "react";
import React from "react";
import { LinkItem } from "./LinkItem";
import "./menu.css";
import { Drawer } from "@mui/material";

export const Menu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Fragment>
      <MenuButton onClick={() => setExpanded(!expanded)}>
        <StaticImage src="../images/menu.png" alt="not A dinosaur" />
      </MenuButton>
      <ExpandedMenu opened={expanded} close={() => setExpanded(false)} />
    </Fragment>
  );
};

type ExpandedMenuProps = {
  opened: boolean,
  close: () => void
}

const ExpandedMenu = ({ opened, close }: ExpandedMenuProps) => {

  return (
    <Drawer
      anchor={"right"}
      open={opened}
      onClose={close}
    >
        <MenuBody className="menu-body" onClick={() => close}>
          <MenuList className="menu-list">
            <MenuItem className="menu__item" to="/works">Works</MenuItem>
            <MenuItem className="menu__item" to="/about">About</MenuItem>
            <MenuItem className="menu__item" to="/contacts">Contacts</MenuItem>
          </MenuList>
          <Links className="menu-links">
            <LinkItem linkPage="./">
              <StaticImage src="../images/menu/instagram.png" alt="instagram" />
            </LinkItem>
            <LinkItem linkPage="./">
              <StaticImage src="../images/menu/facebook.png" alt="facebook" />
            </LinkItem>
            <LinkItem linkPage="./">
              <StaticImage src="../images/menu/twitter.png" alt="twitter" />
            </LinkItem>
          </Links>
        </MenuBody>
    </Drawer>
  )
};

const MenuBody = styled.div`
  background-color: white;
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
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
  // padding: 1rem 0rem;
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
