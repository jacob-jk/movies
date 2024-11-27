import { Header, Wrapper } from "../../../common/Section/styled";
import FilmTile from "../../films/FilmTile";
import PersonDetails from "./PersonDetails/PersonDetails";

const PersonPage = () => {
  return (
    <Wrapper>
      <PersonDetails />
      <Header>Films - 38</Header>
      <FilmTile />
      <Header>Films - 38</Header>
      <FilmTile />
    </Wrapper>
  );
};

export default PersonPage;
