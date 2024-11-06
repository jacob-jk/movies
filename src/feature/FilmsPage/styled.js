import styled from "styled-components";
import poster from "../../images/poster.png";

export const List = styled.div`
  width: 100%;
  display: grid;
  gap: 24px;
  margin: 24px auto;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  transition: 0.3s all;
  cursor: pointer;
  gap: 16px;
  padding: 16px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.03);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
  }
`;

export const Poster = styled.div`
  padding-top: calc(150.119%);
  width: 100%;
  background-image: url(${poster});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 34vw;
    height: auto;
    min-width: 114px;
    margin: 0px;
  }
`;

export const FilmDetails = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const FilmName = styled.h2`
  font-weight: 500;
  font-size: 22px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;

export const FilmYear = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  font-weight: 400;
  font-size: 16px;
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const FilmGenre = styled.div`
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const FilmRate = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const StarImg = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
    transform: translateY(-8%);
  }
`;

export const Score = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const Votes = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;
