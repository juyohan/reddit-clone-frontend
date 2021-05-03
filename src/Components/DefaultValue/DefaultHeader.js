import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
    position: fixed;
  top: 0;
  width: 100vw;
  left: 0;
  z-index: 1;
  background-color: blue;
`;

function DefaultHeader({children, ...rest}){
    return(
        <StyledHeader {...rest}>{children}</StyledHeader>
    );
}

export default DefaultHeader;