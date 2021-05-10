import React, {useState} from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
  overflow: auto;
  position: relative;
  height: inherit;
  text-align: initial;
`;

const StyledDivContainer = styled.div`
  border-left: none;
  background-color: hsla(0, 0%, 100%, 0);
  position: relative;
  z-index: 1;
  height: inherit;
  text-align: initial;
`;

const ContainerDiv = styled.div`
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  color: black;
  caret-color: skyblue;
  background-color: white;
  font-family: Noto Sans, Arial, sans-serif;
  min-height: 122px;
  overflow: hidden;
  padding: 8px 16px;
  resize: vertical;
  -webkit-user-modify: read-write-plaintext-only;
  height: inherit;
  text-align: initial;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  
  &:empty:before {
    content: 'Text (optional)';
    cursor: text;
    bottom: 0;
    color: darkgray;
    left: 0;
    top: 0;
    position: relative;
  }
`;

// const TextDiv = styled.div`
//   padding-top: 0;
//   direction: ltr;
//   text-align: left;
//   position: relative;
//   white-space: pre-wrap;
//
//   &:empty:before {
//     content: 'Text (optional)';
//     cursor: text;
//     bottom: 0;
//     color: darkgray;
//     left: 0;
//     top: 0;
//     position: absolute;
//   }
// `;


function WriteContent() {

    return (
        <div>
            <StyledDiv>
                <StyledDivContainer>
                    <ContainerDiv contentEditable={"true"} spellCheck={"true"}
                    >
                        {/*<div data-contents={"true"}>*/}
                        {/*    <div data-block={"true"}>*/}
                        {/*        <TextDiv>*/}
                        {/*        <span>*/}
                        {/*/!*            <span data-text={"true"}>*!/*/}
                        {/*                <br data-text={"true"}/>*/}
                        {/*/!*            </span>*!/*/}
                        {/*        </span>*/}
                        {/*        </TextDiv>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </ContainerDiv>
                </StyledDivContainer>
            </StyledDiv>
        </div>
    );
}

export default WriteContent;