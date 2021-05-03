import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  outline: none;
  border: none;
  background-color: red;
  font-weight: bold;
  cursor: pointer;
  //position: relative;
`;

function DefaultButton({children, ...rest}) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
}

export default DefaultButton;