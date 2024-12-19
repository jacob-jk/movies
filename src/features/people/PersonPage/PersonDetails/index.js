import { apiImgUrl } from "../../../../common/apiData/dataAPI";
import { formatDate } from "../../../../common/Utilities/utilities";
import {
  InfoWrapper,
  PersonData,
  PersonWrapper,
  PersonName,
  Poster,
  Birth,
  BirthDetails,
  Biography,
} from "./styled";

const PersonDetails = ({ name, birthday, birthplace, biography, poster }) => {
  return (
    <PersonWrapper>
      {poster && <Poster src={`${apiImgUrl}/h632${poster}`} />}
      <PersonData>
        <PersonName>{name}</PersonName>
        {birthday && (
          <InfoWrapper>
            <Birth>Date of birth: </Birth>
            <BirthDetails>{formatDate(birthday, "dd.MM.yyyy")} </BirthDetails>
          </InfoWrapper>
        )}
        {birthplace && (
          <InfoWrapper>
            <Birth>Place of birth: </Birth>
            <BirthDetails>{birthplace}</BirthDetails>
          </InfoWrapper>
        )}
      </PersonData>
      {biography && <Biography>{biography}</Biography>}
    </PersonWrapper>
  );
};

export default PersonDetails;
