import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 48px);
`;

function BottomDiv({children}) {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    );
}

export default BottomDiv;