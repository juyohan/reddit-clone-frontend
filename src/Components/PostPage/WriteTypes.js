import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    position: sticky;
  top: 48px;
  z-index: 8;
  align-items: center;
  background-color: lightgray;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  padding: 4px;
`;

function WriteTypes() {
    return (
        <StyledDiv>

        </StyledDiv>
    );
}

export default WriteTypes;