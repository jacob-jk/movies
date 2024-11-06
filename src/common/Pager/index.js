import {
  PagerWrapper,
  PagerButton,
  PagerIconRotated,
  PageInfo,
  PageInfoStyled,
  PagerText,
} from "./styled";
import prev from "../../images/prev.svg";
import next from "../../images/next.svg";

const Pager = () => (
  <>
    <PagerWrapper>
      <PagerButton>
        <PagerIconRotated src={prev} alt="" />
        <PagerText>First</PagerText>
      </PagerButton>
      <PagerButton>
        <PagerIconRotated src={prev} alt="" />
        <PagerText>Previous</PagerText>
      </PagerButton>
      <PageInfo>
        <PageInfoStyled>Page</PageInfoStyled>
        <PageInfoStyled $number>1</PageInfoStyled>
        <PageInfoStyled>of</PageInfoStyled>
        <PageInfoStyled $number>500</PageInfoStyled>
      </PageInfo>
      <PagerButton>
        <PagerText>Next</PagerText>
        <img src={next} alt="" />
      </PagerButton>
      <PagerButton>
        <PagerText>Last</PagerText>
        <img src={next} alt="" />
      </PagerButton>
    </PagerWrapper>
  </>
);

export default Pager;
