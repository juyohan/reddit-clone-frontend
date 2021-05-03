import React, {useState} from 'react';
import styled from "styled-components";
import ViewTypeWrap from "./ViewTypeWrap";

const ButtonDiv = styled.div`
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 32px;
  padding: 0 8px;
  
  &:hover {
    background-color: lightgray;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: mediumslateblue;
  fill: mediumslateblue;
  align-items: center;
  display: flex;
  outline: none;
  position: relative;
  padding: 0;
  flex-direction: row;
  text-align: left;
  width: 100%;
`;

const StyledSvg = styled.svg`
  display: block;
  height: 20px;
  width: 20px;
`;

const StyledSpan = styled.span`
  display: inline-flex;
  margin-right: 0;
  vertical-align: middle;
  width: 20px;
`;

const StyledI = styled.svg`
  margin-left: 0;
  margin-right: -4px;
  display: inline-block;
  vertical-align: text-bottom;
  width: 16px;
  height: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;

  &::before {
    content: "\f111";
    -webkit-font-smoothing: antialiased;
  }
`;

function SelectViewType() {
    const [isClick, setIsClick] = useState(false);

    const ClickButton = () => {
        setIsClick(true);
        if (isClick === true)
            setIsClick(false);
    }

    // 버튼 클릭시
    return (
        <ButtonDiv>
            <StyledButton role={"menuitem"} onClick={ClickButton} >
                <StyledSpan>
                    <StyledSvg viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                        <path d={"M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"}/>
                    </StyledSvg>
                </StyledSpan>
                <StyledI viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                        <path d={"M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"}/>
                </StyledI>
            </StyledButton>
            <ViewTypeWrap wrap={isClick}>
            </ViewTypeWrap>
        </ButtonDiv>
    );
}

export default SelectViewType;