import {
  FilmDetails,
  FilmGenre,
  FilmGenreItem,
  FilmName,
  FilmRate,
  FilmYear,
  FilmsList,
  FilmItem,
  FilmPoster,
  Score,
  StarImg,
  Votes,
} from "./styled";
import star from "../../../images/star.svg";
import { toFilm } from "../../../routes";

const FilmTile = () => (
  <FilmsList>
    <FilmItem to={toFilm()}>
      <FilmPoster />
      <FilmDetails>
        <FilmName>Tytuł filmu</FilmName>
        <FilmYear>2023</FilmYear>
        <FilmGenre>
          <FilmGenreItem>Science fiction</FilmGenreItem>
        </FilmGenre>
        <FilmRate>
          <StarImg src={star} alt="" />
          <Score>7,8</Score>
          <Votes>35 votes</Votes>
        </FilmRate>
      </FilmDetails>
    </FilmItem>
  </FilmsList>
);

export default FilmTile;
