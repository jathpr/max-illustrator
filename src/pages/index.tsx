import * as React from "react";
import type { PageProps } from "gatsby";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import "../gatsby.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Logo />
      <Menu />
    </>
  );
};

export default IndexPage;
