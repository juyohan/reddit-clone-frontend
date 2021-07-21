import React, {useRef} from 'react';
import styled from "styled-components";
import LeftSideMenu from "./LeftSideMenu";

const ContainerDiv = styled.div`
    width: 30%;
  padding: 100px 50px 0;
  display: flex;
  
`

const ContainerInner = styled.div`
    flex-direction: column;
  //justify-items: center;
  //justify-content: center;
`;


function LeftContainer() {
    // console.log("left : " + window.scrollY);
    const ref = React.createRef();

    return (
        <ContainerDiv ref={ref}>
            <LeftSideMenu>

            </LeftSideMenu>
        </ContainerDiv>
    );
}

export default LeftContainer;