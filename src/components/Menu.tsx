import styled from "@emotion/styled";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Fragment, useState } from "react";
import React from "react";
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
      PaperProps={{
        sx: {
          width: {
            xs: "100%",
            sm: "auto"
          }
        }
      }}
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
        <Links>
          <LinkItem>
            <a href="/">
              <StaticImage src="../images/menu/icons8-instagram-96.svg" alt="instagram" width={60} />
            </a>
          </LinkItem>
          <LinkItem>
            <a href="/">
              <StaticImage src="../images/menu/icons8-facebook-96.svg" alt="facebook" width={60} />
            </a>
          </LinkItem>
          <LinkItem>
            <a href="/">
              <StaticImage src="../images/menu/icons8-twitter-96.svg" alt="twitter" width={60} />
            </a>
          </LinkItem>
        </Links>
      </MenuBody>
    </Drawer>
  )
};

const MenuBody = styled.div`
  padding: 3rem 2rem;
  text-align: center;
  background-color: #fff;
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;
const Links = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 3rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const LinkItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media only screen  and (max-width: 600px){
    padding-bottom: 4rem;
  }
`;
const MenuItem = styled(Link)`
  width: 100%;
  font-size: 3rem;  
  text-decoration: none;
  color: #555;
  transition: 0.2s;
  :hover {
    color: #000;
    transition: 0.2s;
  }
  @media only screen  and (max-width: 600px){
    font-size: 4rem;
    color: #000;
    text-align: center;
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
