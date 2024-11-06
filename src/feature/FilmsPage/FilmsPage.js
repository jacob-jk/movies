import Section from "../../common/Section";
import Films from "./FilmsList";

export const FilmsPage = () => (
  <>
    <Section title="Popular films" body={<Films />} />
  </>
);

export default FilmsPage;
