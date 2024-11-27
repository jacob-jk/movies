import poster from "../../../../images/poster.png";
import star from "../../../../images/star.svg";
import {
  Wrapper,
  FilmPoster,
  FilmTitle,
  FilmReleaseYear,
  FilmInfoContainer,
  FilmInfo,
  FilmInfoDetail,
  FilmInfoDetailMobile,
  FilmGenresList,
  FilmGenre,
  FilmReview,
  Star,
  FilmRating,
  FilmRatingText,
  FilmRatingTextVote,
  FilmDescription,
  FilmDescriptionMobile,
} from "./styled";

const FilmDetails = () => {
  return (
    <Wrapper>
      <FilmPoster src={poster} alt="poster" />
      <section>
        <FilmTitle>Tytuł</FilmTitle>
        <FilmReleaseYear>2024</FilmReleaseYear>
        <FilmInfoContainer>
          <FilmInfo>
            <FilmInfoDetailMobile>Production:</FilmInfoDetailMobile>
            <FilmInfoDetail>Ameryka</FilmInfoDetail>
          </FilmInfo>
          <FilmInfo>
            <FilmInfoDetailMobile>Release date:</FilmInfoDetailMobile>
            <FilmInfoDetail>12.09.2024</FilmInfoDetail>
          </FilmInfo>
        </FilmInfoContainer>
        <FilmGenresList>
          <FilmGenre>Animation</FilmGenre>
          <FilmGenre>Science Fiction</FilmGenre>
          <FilmGenre>Family</FilmGenre>
        </FilmGenresList>
        <FilmReview>
          <Star src={star} alt="star" />
          <FilmRating>8</FilmRating>
          <FilmRatingText>/ 10</FilmRatingText>
          <FilmRatingTextVote>2391 votes</FilmRatingTextVote>
        </FilmReview>
        <FilmDescription>
          After a shipwreck, an intelligent robot called Roz is stranded on an
          uninhabited island. To survive the harsh environment, Roz bonds with
          the island's animals and cares for an orphaned baby goose.
        </FilmDescription>
      </section>
      <FilmDescriptionMobile>Opis</FilmDescriptionMobile>
    </Wrapper>
  );
};

export default FilmDetails;
