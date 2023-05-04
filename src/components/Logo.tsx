import styled from "@emotion/styled";
import { Link } from "gatsby";

type Props = {};
export const Logo = (props: Props) => {
  return (
    <Wrapper>
      <ClearLink to="/">max moiseev</ClearLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 3rem;
`;

const ClearLink = styled(Link)`
  text-decoration: none;
`;
