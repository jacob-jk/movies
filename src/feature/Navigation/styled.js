import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const Background = styled.div`
  background: ${({ theme }) => theme.color.black};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1368px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 100%;
    gap: 15px;
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export const LogoText = styled.h1`
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NavSection = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  padding: 13px 24px;
  border-radius: 30px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.black};
  transition: background-color 0.5s, color 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 13px;
    line-height: 19.5px;
    padding: 10px 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: 18px;
    padding: 8px 14px;
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;
