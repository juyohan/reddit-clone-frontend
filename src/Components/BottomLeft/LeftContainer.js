import React from 'react';
import styled from "styled-components";
import LeftSideMenu from "./LeftSideMenu";

const ContainerDiv = styled.div`
    width: 24%;
  padding: 100px 50px 0;
  display: flex;
`

const ContainerInner = styled.div`
    flex-direction: column;
  //justify-items: center;
  //justify-content: center;
`;


function LeftContainer() {
    return (
        <ContainerDiv>
            <LeftSideMenu>

            </LeftSideMenu>
        </ContainerDiv>
    );
}

export default LeftContainer;