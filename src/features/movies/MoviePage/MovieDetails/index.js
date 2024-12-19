import {
  Backdrop,
  BackdropContainer,
  Background,
  BackdropText,
  Rate,
  Rating,
  Star,
  Title,
  Votes,
} from "./styled";
import star from "../../../../common/images/star.svg";
import { apiImgUrl } from "../../../../common/apiData/dataAPI";

const MovieDetails = ({ poster, title, voteCount, voteAverage }) => {
  return (
    poster && (
      <Background>
        <BackdropContainer>
          <BackdropText>
            <Title>{title}</Title>
            <Rating>
              <Rate>
                <Star src={star} />
                {voteAverage.toFixed(1)} <Votes>/ 10</Votes>
              </Rate>
              <Votes>{voteCount} votes</Votes>
            </Rating>
          </BackdropText>
          <Backdrop src={`${apiImgUrl}/original${poster}`}></Backdrop>
        </BackdropContainer>
      </Background>
    )
  );
};

export default MovieDetails;
