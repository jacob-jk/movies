import poster from "../../../images/poster.png";
import star from "../../../images/star.svg";
import {
  FilmBackdrop,
  FilmInfo,
  FilmTitle,
  FilmRatingImg,
  FilmRatingText,
  FilmRating,
  FilmRatingNote,
  FilmRatingTextVote,
} from "./styled";
import FilmDetails from "./FilmDetails/FilmDetails";
import { Header, Wrapper } from "../../../common/Section/styled";
import PersonTile from "../../people/PersonTile";

export const FilmPage = () => {
  return (
    <>
      <FilmBackdrop src={poster}>
        <FilmInfo>
          <FilmTitle>Tytuł filmu</FilmTitle>
          <FilmRating>
            <FilmRatingImg src={star}></FilmRatingImg>
            <FilmRatingNote>1</FilmRatingNote>
            <FilmRatingText>/ 10</FilmRatingText>
            <FilmRatingTextVote>ilość głosów</FilmRatingTextVote>
          </FilmRating>
        </FilmInfo>
      </FilmBackdrop>
      <Wrapper>
        <FilmDetails />
        <Header>Cast</Header>
        <PersonTile />
        <Header>Crew</Header>
        <PersonTile />
      </Wrapper>
    </>
  );
};

export default FilmPage;
