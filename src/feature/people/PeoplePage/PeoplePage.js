import Pager from "../../../common/Pager";
import Section from "../../../common/Section";
import PersonTile from "../PersonTile";

export const PeoplePage = () => (
  <>
    <Section
      title="Popular people"
      body={
        <>
          <PersonTile />
          <Pager />
        </>
      }
    />
  </>
);

export default PeoplePage;
