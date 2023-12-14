import { useEffect, useState } from "react";
import { getWorks } from "../server/works";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "@emotion/styled";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";

type Props = {};
const Works = (props: Props) => {
  const [works, setWorks] = useState<{ url: string; name: string }[]>([]);

  const updateWorks = async () => getWorks().then(setWorks);

  useEffect(() => {
    updateWorks();
  }, []);
  return (
    <Wrapper>
      <Logo />
      <Menu />
      <Carousel width="100%">
        {works.map((work) => (
          <div>
            <Img src={work.url} alt={work.name} />
          </div>
        ))}
      </Carousel>
    </Wrapper>
  );
};
export default Works;

const Wrapper = styled.div`
  height: 100vh;
`;

const Img = styled.img`
  height: 86vh;
`;
