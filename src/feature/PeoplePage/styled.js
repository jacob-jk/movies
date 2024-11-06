import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  gap: 24px;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
    gap: 16px;
  }
`;

export const PeopleListItem = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  display: grid;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  transition: 0.3s all;
  cursor: pointer;
  padding: 16px;
  gap: 12px;
  justify-content: center;

  &:hover {
    opacity: 0.8;
    transform: scale(1.03);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px;
    grid-template-columns: auto;
    gap: 8px;
  }
`;

export const PeoplePoster = styled.img`
  width: 176px;
  height: 231px;
  border-radius: 5px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 120px;
    height: 178px;
  }
`;

export const PeopleName = styled.div`
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  line-height: 1.3;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
