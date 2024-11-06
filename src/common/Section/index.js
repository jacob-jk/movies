import { Header, Wrapper } from "./styled";

const Section = ({ title, body }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      {body}
    </Wrapper>
  );
};

export default Section;
