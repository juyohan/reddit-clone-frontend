import React from 'react';
import styled from "styled-components";

const ContainerDiv = styled.div`
    height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 40px;
`;

const SubjectDiv = styled.div`
    font-size: 26px;
  align-content: center;
  display: flex;
`

const StyledSvg = styled.svg`
    stroke: currentColor;
  fill: currentColor;
  stroke-width: 0;
  height: 1em;
  width: 1em;
`

function BottomRightContainer() {
    return (
        <ContainerDiv>
            <SubjectDiv>
               <span>
                   <StyledSvg viewBox={"0 0 24 24"}>
                       <path d={"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}/>
                   </StyledSvg>

               </span>
            </SubjectDiv>
        </ContainerDiv>
    );
}

export default BottomRightContainer;