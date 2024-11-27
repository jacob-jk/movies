import {
  Background,
  Wrapper,
  LogoText,
  NavSection,
  StyledLink,
  StyledNavLink,
  Image,
  IconContainer,
  StyledHeader,
} from "./styled";
import Search from "../../common/Search";
import videoIcon from "../../images/videoIcon.svg";

export const Navigation = () => {
  return (
    <Background>
      <Wrapper>
        <StyledHeader>
          <StyledLink to="/">
            <IconContainer>
              <Image src={videoIcon} alt="search icon" />
              <LogoText>Films Browser</LogoText>
            </IconContainer>
          </StyledLink>
          <nav>
            <NavSection>
              <li>
                <StyledNavLink to="/films">FILMS</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/people">PEOPLE</StyledNavLink>
              </li>
            </NavSection>
          </nav>
        </StyledHeader>
        <Search />
      </Wrapper>
    </Background>
  );
};

export default Navigation;
