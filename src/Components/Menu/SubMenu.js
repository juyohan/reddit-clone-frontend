import React from 'react';
import styled, {css} from "styled-components";

const StyledDiv = styled.div`
  background-color: white;
    display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: inherit;
  font-size: 14px;
  flex-direction: row;
  min-width: 350px;
  
`;

const SubA = styled.a`
  color: black;
  border-bottom: 4px solid white;
  height: 100%;
  text-transform: uppercase;
    position: relative;
  font-weight: 500;
  line-height: 50px;
  text-decoration: none;
  letter-spacing: unset;

  &:hover {
    border-bottom: 4px solid lightgray;
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
`;

function SubMenu() {
    return(
        <StyledDiv>
            <SubA href={"/home"}>
                <StyledSpan>
                    HOME
                </StyledSpan>
            </SubA>
            <SubA href={"/group"}>
                <StyledSpan>
                    GROUP
                </StyledSpan>
            </SubA>
        </StyledDiv>
    );
}

export default SubMenu;