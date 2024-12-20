import { Container } from "../Container";
import PageHeader from "../PageHeader";
import { NoResultsImg, Wrapper } from "./styled";

const NoResultsPage = ({ query }) => {
  return (
    <Container>
      <PageHeader title={`Sorry, there are no results for "${query}"`} />
      <Wrapper>
        <NoResultsImg />
      </Wrapper>
    </Container>
  );
};

export default NoResultsPage;
