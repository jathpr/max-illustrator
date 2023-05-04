import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

export const Menu = () => {
  return (
    <MenuButton>
      <StaticImage src="../images/menu.png" alt="not A dinosaur" />
    </MenuButton>
  );
};

const MenuButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
`;
