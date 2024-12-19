import {
  ButtonLink,
  ErrorIcon,
  ErrorText,
  ErrorAdvice,
  Wrapper,
} from "./styled";

const ErrorPage = () => (
  <Wrapper>
    <ErrorIcon />
    <ErrorText>Ooops! Something went wrong... </ErrorText>
    <ErrorAdvice>
      Please check your network connection and try again
    </ErrorAdvice>
    <ButtonLink to={"/"}>Back to home page</ButtonLink>
  </Wrapper>
);

export default ErrorPage;
