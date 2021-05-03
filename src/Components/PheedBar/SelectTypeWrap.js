import React from 'react';
import styled, {css} from "styled-components";

const StyledDiv = styled.div`
  left: 7.6vw;
  top: 19.4vh;
  margin-left: -5px;
  min-width: 100px;
  border: 1px solid white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.2);
  color: black;
  overflow: hidden;
  background-color: white;
  position: absolute;
  z-index: 10;

  @media (max-width: 640px) {
    top: 17vh;
    left: 4vw;
  }
`;

const StyledA = styled.a`
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  max-height: 54px;
  display: inline-block;
  white-space: normal;
  -webkit-box-orient: vertical;
  fill: gray;
  font-size: 14px;
  font-weight: 500;
  padding: 8px;
  text-transform: capitalize;
  text-decoration: none;
  
  &:hover {
    fill: black;
    color: black;
    background-color: powderblue;
  }
`;

const StyledSvg = styled.svg`
  display: block;
  height: 16px;
  width: 16px;
  fill: currentColor;
  margin: 0 auto;
`;

const StyledSpan = styled.span`
  display: inline-block;

  ${props => props.icon && css`
    margin-right: 4px;
    vertical-align: middle;
    width: 20px;
  `}
`;

function SelectTypeWrap({open}) {
    if (!open)
        return null;

    return (
        <StyledDiv role={"menu"} tabindex={"-1"}>
            <StyledA href={"/best/"} role={"menuitem"}>
                <StyledSpan icon>
                    <StyledSvg viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                        <path
                            d={"M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"}/>
                        <path
                            d={"M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"}/>
                    </StyledSvg>
                </StyledSpan>
                <StyledSpan>
                    Best
                </StyledSpan>
            </StyledA>

            <StyledA href={"/hot/"} role={"menuitem"}>
                <StyledSpan icon>
                    <StyledSvg viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                        <path d={"M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"}/>
                    </StyledSvg>
                </StyledSpan>
                <StyledSpan>
                    Hot
                </StyledSpan>
            </StyledA>

            <StyledA href={"/new/"} role={"menuitem"}>
                <StyledSpan icon>
                    <StyledSvg viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                        <g>
                            <polygon fill={"inherit"} points={"17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"}/>
                        </g>
                    </StyledSvg>
                </StyledSpan>
                <StyledSpan>
                    New
                </StyledSpan>
            </StyledA>

            <StyledA href={"/top/"} role={"menuitem"}>
                <StyledSpan icon>
                    <StyledSvg viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                        <g>
                            <path fill={"inherit"} d={"M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"}/>
                        </g>
                    </StyledSvg>
                </StyledSpan>
                <StyledSpan>
                    Top
                </StyledSpan>
            </StyledA>
        </StyledDiv>
    );
}

export default SelectTypeWrap;