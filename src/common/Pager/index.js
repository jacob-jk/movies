import {
  Button,
  PageNumber,
  Pages,
  PaginationWrapper,
  ButtonText,
  StyledButtons,
  ArrowDoubled,
} from "./styled";
import { BackwardArrow, Arrow } from "./pagerSymbols/arrowSymbols";
import { useReplaceQueryParameter } from "../../features/queryParameters";
import { pageQueryParamName } from "../../features/queryParamNames";

const Pager = ({ currentPage, lastPage }) => {
  const page = parseInt(currentPage);
  const backButtonsDisabled = page === 1;
  const forwardButtonsDisabled = page === lastPage;
  const replaceQueryParameter = useReplaceQueryParameter();

  const setPage = (destinationPage) => {
    replaceQueryParameter([
      {
        key: pageQueryParamName,
        value: destinationPage,
      },
    ]);
  };

  return (
    <PaginationWrapper>
      <StyledButtons>
        <Button onClick={() => setPage(1)} disabled={backButtonsDisabled}>
          <BackwardArrow disabled={backButtonsDisabled} />
          <ButtonText>First</ButtonText>
          <ArrowDoubled>
            <BackwardArrow disabled={backButtonsDisabled} />
          </ArrowDoubled>
        </Button>
        <Button
          onClick={() => setPage(page - 1)}
          disabled={backButtonsDisabled}
        >
          <BackwardArrow disabled={backButtonsDisabled} />
          <ButtonText>Previous</ButtonText>
        </Button>
      </StyledButtons>
      <Pages>
        Page
        <PageNumber>{currentPage}</PageNumber>
        of
        <PageNumber>{lastPage}</PageNumber>
      </Pages>
      <StyledButtons>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={forwardButtonsDisabled}
        >
          <ButtonText>Next</ButtonText>
          <Arrow disabled={forwardButtonsDisabled} />
        </Button>
        <Button
          onClick={() => setPage(lastPage)}
          disabled={forwardButtonsDisabled}
        >
          <ButtonText>Last</ButtonText>
          <ArrowDoubled>
            <Arrow disabled={forwardButtonsDisabled} />
          </ArrowDoubled>
          <Arrow disabled={forwardButtonsDisabled} />
        </Button>
      </StyledButtons>
    </PaginationWrapper>
  );
};

export default Pager;
