import { Link } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";
import poster from "../../../images/poster.png";

export const FilmsList = styled.div`
  width: 100%;
  display: grid;
  gap: 24px;
  margin: 24px auto;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 12px auto;
    grid-template-columns: 1fr;
  }
`;

export const FilmItem = styled(Link)`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  box-shadow: 0px 4px 12px #bac7d580;
  transition: 0.3s all;
  cursor: pointer;
  gap: 16px;
  padding: 16px;
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.8;
    transform: scale(1.03);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
  }
`;

export const FilmPoster = styled.div`
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
  line-height: 1.3;

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

export const FilmGenre = styled.ul`
  margin: 0px 0px 45px -8px;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 16px;
  }
`;

export const FilmGenreItem = styled.li`
  background-color: ${({ theme }) => theme.color.grey};
  font-size: 14px;
  line-height: 1.4;
  border-radius: 5px;
  margin-left: 8px;
  margin-bottom: 8px;
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
    margin-bottom: 8px;
  }
`;

export const FilmRate = styled.div`
  margin: 0px;
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    position: relative;
  }
`;

export const StarImg = styled.img`
  width: 24px;
  transform: translateY(-8%);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
  }
`;

export const Score = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  margin: 0px 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const Votes = styled.p`
  margin: 0px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;
