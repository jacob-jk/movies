import Section from "../../../common/Section";
import Pager from "../../../common/Pager";
import FilmTile from "../FilmTile";

export const FilmsPage = () => (
  <Section
    title="Popular films"
    body={
      <>
        <FilmTile />
        <Pager />
      </>
    }
  />
);

export default FilmsPage;
