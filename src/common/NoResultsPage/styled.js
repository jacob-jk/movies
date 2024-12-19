import styled from "styled-components";
import { ReactComponent as NoResults } from "../images/no-results.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoResultsImg = styled(NoResults)`
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 320px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    height: 180px;
  }
`;
