import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  margin: 64px auto;
  box-shadow: #bac7d580 0px 4px 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px auto 21px;
    padding: 16px;
    gap: 16px;
    grid-template-areas:
      "image info"
      "description description";
  }
`;

export const FilmPoster = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const FilmTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 8px 0px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    margin: 0px 0px 4px;
  }
`;
export const FilmReleaseYear = styled.p`
  margin: 0px 0px 24px;
  font-size: 22px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: normal;
    font-size: 13px;
    line-height: 130%;
    margin-bottom: 8px;
  }
`;

export const FilmInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin: 0px 0px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 8px;
  }
`;

export const FilmInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FilmInfoDetail = styled.div`
  margin: 0px 10px 0px 0px;
  font-size: 18px;
  line-height: 120%;
  color: rgb(0, 0, 0);
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    margin-right: 4px;
  }
`;

export const FilmInfoDetailMobile = styled(FilmInfoDetail)`
  color: ${({ theme }) => theme.color.stormGray};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const FilmGenresList = styled.ul`
  margin: 0px 0px 8px -16px;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 4px;
    margin-left: -8px;
  }
`;

export const FilmGenre = styled.li`
  background-color: ${({ theme }) => theme.color.grey};
  font-size: 14px;
  line-height: 1;
  border-radius: 5px;
  margin: 0px 0px 16px 16px;
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 110%;
    margin: 0px 0px 8px 8px;
  }
`;

export const FilmReview = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 0px;
  }
`;

export const Star = styled.img`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
  }
`;

export const FilmRating = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 0px 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
    font-weight: 600;
  }
`;

export const FilmRatingText = styled.p`
  margin: 0px 12px 3px 0px;
  font-size: 14px;
  line-height: 1.2;
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const FilmRatingTextVote = styled.p`
  margin: 0px 12px 3px 0px;
  font-size: 14px;
  line-height: 1.2;
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
    margin: 0px;
  }
`;

export const FilmDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const FilmDescriptionMobile = styled.p`
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    grid-area: description;
  }
`;
