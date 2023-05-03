import * as React from "react";
import type { PageProps } from "gatsby";
import { Logo } from "../components/Logo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Logo />
    </>
  );
};

export default IndexPage;
