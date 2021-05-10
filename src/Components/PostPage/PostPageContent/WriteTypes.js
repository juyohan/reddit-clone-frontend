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

const StyledButton = styled.button`
    border-radius: 4px;
  color: gray;
  padding: 0;
  position: relative;
  border: 1px solid transparent;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  min-height: 32px;
  text-transform: unset;
  min-width: 32px;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  outline: none;
  background: transparent;
  transition: background-color .1s;
  cursor: pointer;
  
  &:before {
    border-radius: 4px;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  
  &:hover {
    background: darkgray;
  }
`;

const StyledSvg = styled.svg`
    padding: 0;
  display: inline-block;
  height: 20px;
  width: 20px;
  font-size: 20px;
  line-height: 20px;
  box-sizing: border-box;
  fill: currentColor;
`;

const InnerDiv = styled.div`
    bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
`;

const TextDiv = styled.div`
  opacity: 0;
  transition: opacity 0s .5s;
  visibility: hidden;
  bottom: 100%;
  margin-bottom: 5px;
  left: 50%;
  position: absolute;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  background-color: black;
  border-radius: 5px;
  color: white;
  padding: 5px 16px;
  text-align: center;
  transform: translateX(-50%);
  white-space: pre;
  z-index: 100;
  
  &::after {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    content: "";
    margin-left: -5px;
    width: 0;
    left: 50%;
    position: absolute;
    border-top: 5px solid black;
    top: 100%;
  }
`;

function WriteTypes() {
    return (
        <StyledDiv>
            {/* 옵션 선택 */}
            <StyledButton role={"button"} tabindex={"-1"} aria-label={"Bold"} aria-selected={"false"} >
                <StyledSvg viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                    <path d={"M12.44,9.72v0a3.07,3.07,0,0,0,2.67-3.22c0-2.84-2.42-3.46-5-3.46H4.51V17H10.4c2.61,0,5.09-1,5.09-3.86C15.49,10.91,14.14,10,12.44,9.72ZM7.54,5.38H9.85c1.65,0,2.31.61,2.31,1.7s-.74,1.68-2.35,1.68H7.54ZM10,14.65H7.54V10.95H9.89c1.7,0,2.59.61,2.59,1.83S11.72,14.65,10,14.65Z"}/>
                </StyledSvg>
                <InnerDiv>
                    <TextDiv>
                        Bold
                    </TextDiv>
                </InnerDiv>
            </StyledButton>
        </StyledDiv>
    );
}

export default WriteTypes;