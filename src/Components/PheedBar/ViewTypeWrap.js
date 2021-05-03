import React from 'react';
import styled, {css} from "styled-components";

const StyledDiv = styled.div`
  top: 19.6vh;
  right: 1vw;
  margin-left: -9px;
  min-width: 52px;
  border: 1px solid white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(28,28,28,0.2);
  color: black;
  overflow: hidden;
  background-color: white;
  position: absolute;
  z-index: 10;

  @media (max-width: 640px) {
    top: 17.6vh;
    right: 0;
  }
`;

const StyledButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
    color: darkgray;
  fill: darkgray;
  align-items: center;
  display: flex;
  outline: none;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding: 8px;
  text-transform: capitalize;
  white-space: nowrap;
  flex-direction: row;
  text-align: left;
  width: 100%;
  
  &:hover {
    fill: black;
    color: black;
    background-color: lightblue;
  }
  
  &:visited {
    fill: mediumslateblue;
    color: mediumslateblue;
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  
  ${props => props.icon && css`
    margin-right: 4px;
    vertical-align: middle;
    width: 20px;
  `}
`;

const StyledSvg = styled.svg`
  display: block;
  height: 20px;
  width: 20px;
`;

function ViewTypeWrap({children, wrap}) {

    console.log(wrap);
    if(!wrap)
        return null;

    return(
        <>
            <StyledDiv role={"menu"} tabindex={"-1"}>
                <StyledButton role={"menuitem"}>
                    <StyledSpan icon>
                        <StyledSvg viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                            <path d={"M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"}/>
                        </StyledSvg>
                    </StyledSpan>
                    <StyledSpan>
                        Card
                    </StyledSpan>
                </StyledButton>

                <StyledButton role={"menuitem"}>
                    <StyledSpan icon>
                        <StyledSvg viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                            <path d={"M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"}/>
                        </StyledSvg>
                    </StyledSpan>
                    <StyledSpan>
                        Classic
                    </StyledSpan>
                </StyledButton>

                <StyledButton role={"menuitem"}>
                    <StyledSpan icon>
                        <StyledSvg viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                            <path d={"M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"}/>
                        </StyledSvg>
                    </StyledSpan>
                    <StyledSpan>
                        Compact
                    </StyledSpan>
                </StyledButton>
            </StyledDiv>
        </>
    );
}

export default ViewTypeWrap;