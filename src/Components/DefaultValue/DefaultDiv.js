import React from 'react';
import styled, {css} from "styled-components";

const sizeStyles = css`
  ${props => props.bottom && css `
    margin-top: 50px;
    height: 100vh;
    width: inherit;
    //padding-left: 30px;
  `};
`;


const DeDiv = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  font-style: normal;
  // 박스 크기의 기준을 정하겠다.
  
  ${sizeStyles};
  
  background-color: rgb(193,193,193);
  
  ${props => props.icon && css`
    width: 22px;
    height: 14px;
    background-color: fuchsia;
  `};
`;

function DefaultDiv({children, bottom, icon, ...rest}) {
    return (
        <DeDiv bottom={bottom} icon={icon} {...rest}>{children}</DeDiv>
    );
}

export default DefaultDiv;