import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1368px;
  max-width: calc(100% - 24px);
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: calc(-32px + 100vw);
  }
`;

export const Header = styled.h1`
  margin: 56px 0px 24px;
  font-size: 36px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 24px 0px 12px;
    font-size: 18px;
  }
`;
