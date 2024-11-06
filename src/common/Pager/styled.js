import styled, { css } from "styled-components";

export const PagerWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
`;

export const PagerButton = styled.button`
  background-color: ${({ theme }) => theme.color.pattensBlue};
  border: none;
  border-radius: 5px;
  margin: 6px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 6px 2px;
    padding: 0 5px;
  }
`;

export const PagerIconRotated = styled.img`
  transform: rotate(180deg);
`;

export const PagerText = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const PageInfo = styled.div`
  margin: 0 16px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 8px;
  }
`;

export const PageInfoStyled = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
  }

  ${({ $number }) =>
    $number &&
    css`
      color: ${({ theme }) => theme.color.black};
      font-weight: 600;
      padding: 0 8px;
    `}
`;
