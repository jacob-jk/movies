import { Wrapper, Input, SearchIcon } from "./styled";

export const Search = () => {
  return (
    <Wrapper>
      <SearchIcon />
      <Input placeholder="Search for movies..." />
    </Wrapper>
  );
};

export default Search;
