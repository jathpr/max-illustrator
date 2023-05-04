import styled from "@emotion/styled";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Fragment, useState } from "react";

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

const ExpandedMenu = () => (
  <MenuBody>
    <MenuList>
      <MenuItem to="/works">Works</MenuItem>
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/contacts">Contacts</MenuItem>
    </MenuList>
    <Links>
      <Instagram />
    </Links>
  </MenuBody>
);

const MenuBody = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  top: 0;
  background-color: white;
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const Links = styled.div``;
const Instagram = styled.div``; //can be moved to other component
const MenuItem = styled(Link)``;

const MenuButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
`;
