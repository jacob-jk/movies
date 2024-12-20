import styled from "styled-components";
import { ReactComponent as NoPoster } from "../images/no-poster-image.svg";

export const TileContainer = styled.div`
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.border.boxShadow};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  width: 100%;
  height: 100%;
  padding: 16px 16px 0;
  display: grid;
  grid-template-rows: auto 1fr;
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.border.hoverBoxShadow};
  }
  &:active {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    grid-template-columns: auto 1fr;
    height: 100%;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    margin-bottom: 16px;
  }
`;

export const NoMovieImage = styled.div`
  height: 100%;
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: ${({ theme }) => theme.border.borderRadius};
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.color.silver};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 200px;
    height: auto;
    margin-right: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    width: auto;
    height: 169px;
    margin-bottom: 0;
  }
`;

export const NoMovieImageIcon = styled(NoPoster)`
  height: 96px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    height: 48px;
  }
`;

export const Poster = styled.img`
  height: 100%;
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: ${({ theme }) => theme.border.borderRadius};
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 200px;
    height: auto;
    margin-right: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    width: auto;
    height: 169px;
    margin-bottom: 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: block;
  }
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  margin-bottom: 16px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.extraLarge}px) {
    margin-bottom: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    grid-gap: 4px;
    margin-bottom: 8px;
    margin-right: 16px;
  }
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 16px 0 0;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 16px;
    line-height: 1.3;
    margin: 0;
  }
`;

export const Release = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.3;
    margin: 0;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  gap: 8px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0 16px 0 0;
  }
`;

export const TagButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 36px;
  border: none;
  padding: 8px 16px;
  background: ${({ theme }) => theme.color.mystic};
  border-radius: ${({ theme }) => theme.border.borderRadius};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 8px 12px;
    height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    padding: 4px 8px;
    gap: 8px;
    height: 19px;
  }
`;

export const Tag = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 12px;
    line-height: 1.1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 0;
  }
`;

export const Star = styled.img`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 16px;
  }
`;

export const Rate = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const Votes = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;
