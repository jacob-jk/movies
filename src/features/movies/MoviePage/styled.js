import styled from "styled-components";

export const TileWrapper = styled.main`
  margin: 0 auto;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    max-width: 90%;
  }
`;
