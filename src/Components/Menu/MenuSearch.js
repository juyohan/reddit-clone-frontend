import React from 'react';
import styled, {css} from "styled-components";

const StyledForm =styled.form`
  
  ${props => (props.open === false) && css`
    display: none;
    `}
`;

const Search = styled.input`
  
  appearance: none;
  border: none;
  border-radius: 4px;
  box-shadow: none;
  height: 36px;
  outline: none;
  padding: 0 8px;
  width: 100%;
  
`;

function MenuSearch({children, open, ...rest}) {
    return (
        <>
            <StyledForm role={"search"} open={open}>
                <Search {...rest} />
            </StyledForm>
        </>
    );
}

export default MenuSearch;