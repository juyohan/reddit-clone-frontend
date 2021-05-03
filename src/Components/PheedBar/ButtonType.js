import React, {useState} from 'react';
import styled, {css} from "styled-components";
import SelectTypeWrap from "./SelectTypeWrap";

const SelectedType = styled.div`
  align-items: center;
  border-radius: 4px;
  display: flex;
`;

const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  padding: 0 8px;
  display: flex;
  border: none;
  white-space: nowrap;
  width: 100%;
  flex-direction: row;
  text-align: left;
  cursor: pointer;

  ${props => props.button && css`
    background: inherit;
    color: mediumslateblue;
    fill: mediumslateblue;
    margin: 0;
    outline: none;
  `}
`;

const IconSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  max-height: 54px;
  display: inline-block;
  white-space: normal;
  -webkit-box-orient: vertical;

  ${props => props.icon && css`
    vertical-align: middle;
    margin-right: 2px;
    width: 20px;
  `}
`;

const StyledI = styled.svg`
  margin-left: 2px;
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

const StyledSvg = styled.svg`
  display: block;
  height: 16px;
  width: 16px;
  fill: currentColor;
  margin: 0 auto;
`;

function ButtonType() {

    const [isClick, setIsClick] = useState(false);

    const OpenWrap = () => {
        setIsClick(true);
        if (isClick === true)
            setIsClick(false);
    }

    return (
        <SelectedType>
            <StyledButton button onClick={OpenWrap}>
                <IconSpan icon>
                    <StyledSvg viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                        <path
                            d={"M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"}/>
                        <path
                            d={"M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"}/>
                    </StyledSvg>
                </IconSpan>
                <IconSpan text>
                    Best
                </IconSpan>
                <StyledI viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"}>
                    <path d={"M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"}/>
                </StyledI>
            </StyledButton>
            <SelectTypeWrap open={isClick}>
            </SelectTypeWrap>
        </SelectedType>
    );
}

export default ButtonType;