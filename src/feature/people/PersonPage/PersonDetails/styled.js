import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  margin: 64px auto;
  box-shadow: 0px 4px 12px #bac7d580;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px auto 21px;
    padding: 16px;
    gap: 16px;
    grid-template-areas:
      "image info"
      "description description";
  }
`;

export const PersonImage = styled.img`
  width: 399px;
  height: 564px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    width: 232px;
    height: 326px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 116px;
    height: 163px;
  }
`;

export const PersonName = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 8px 0px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.3;
    margin: 4px 0px 16px;
  }
`;

export const PersonInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 0;
  }
`;

export const PersonInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PersonDetail = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.2;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    margin-right: 4px;
  }
`;
export const PersonData = styled(PersonDetail)`
  color: ${({ theme }) => theme.color.stormGray};
`;

export const DesktopPersonData = styled(PersonData)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const MobilePersonData = styled(PersonData)`
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const PersonDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
    font-size: 14px;
    grid-area: description;
  }
`;

export const PersonDescriptionMobile = styled.p`
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 1.6;
    margin: 0px;
    grid-area: description;
  }
`;
