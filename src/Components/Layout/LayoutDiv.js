import React from 'react';
import styled, {css} from 'styled-components'
import DefaultDiv from "../DefaultValue/DefaultDiv";

const InnerDiv = css`
  ${props => props.bottom && css`
    flex-direction: row-reverse;
    -webkit-box-orient: horizontal;
    background-color: saddlebrown;
    height: 50px;
  `};
  ${props => props.top && css`
    flex-direction: row;
    -webkit-box-orient: horizontal;
    background-color: green;
    height: 50px;
    //place-content: center space-between;
    //justify-content: space-between;
  `};
`;

const WidthDiv = css`
    ${props => props.width && css `
      width: 100vw;
    `}
`;

// styled() = Override style이다.
// Override를 하게되면 그 안에 props를 줄 수 없다.
const StyledDiv = styled(DefaultDiv)`
  display: flex;
  // 박스의 흐름을 지정
  -webkit-box-orient: vertical;
  // 박스가 정렬되는 순서
  -webkit-box-direction: normal;
  flex-direction: column;
  // 박스가 정렬되는 방향
  -webkit-box-pack: start;
  // 서브축 기준으로 공간을 늘리겠다.
  //align-items: stretch;
  // 행이 여러개라도 서브축 기준으로 공간을 늘리겠다.
  //align-content: stretch;
  position: relative;
  font-size: 0;
  width: inherit;
  background-color: aqua;
  
  ${InnerDiv};
  
  ${WidthDiv};
`;

function LayoutDiv({children, bottom, width, top, ...rest}) {
    return (
        <StyledDiv bottom={bottom} width={width} top={top} {...rest}>{children}</StyledDiv>
    );
}

export default LayoutDiv;