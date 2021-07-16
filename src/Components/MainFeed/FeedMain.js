import React from 'react';
import styled from "styled-components";

const MainContainer = styled.div`
    margin-top: 8px;
  cursor: pointer;
`

const ContainerInner = styled.div`
    max-height: 250px;
  overflow: hidden;
  padding: 5px 8px 10px;
`

const PheedText = styled.div`
    font-family: sans-serif, Noto Sans, Arial;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  word-break: break-word;
  overflow: auto;
  padding-bottom: 1px;
  margin-bottom: -1px;
`

function FeedMain() {
    return (
        <MainContainer>
            <ContainerInner>
                <PheedText>
                    sdfsd
                </PheedText>
            </ContainerInner>
        </MainContainer>
    );
}

export default FeedMain;