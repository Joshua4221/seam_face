import { InputF, InputDiv, SearchfieldDiv } from "./searchfield.style";
import { FaSearch } from "react-icons/fa";
import { withTheme } from "styled-components";

const SearchField = ({ theme, addon, placeholder, width }) => {
  return (
    <SearchfieldDiv>
      <InputDiv Color={theme} view={addon}>
        <InputF
          width={width}
          Color={theme}
          view={addon}
          placeholder={placeholder}
        />
        <FaSearch />
      </InputDiv>
    </SearchfieldDiv>
  );
};

export default withTheme(SearchField);
