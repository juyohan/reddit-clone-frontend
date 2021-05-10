import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
  justify-content: center;
  flex-grow: 1;
  flex-flow: column nowrap;
  min-height: 280px;
  box-sizing: border-box;
  text-align: center;
  border: 1px dashed white;
`;

const UploadDiv = styled.p`
    color: dodgerblue;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
`;

const UploadButton = styled.button`
    display: inline-block;
  margin: 10px 8px;
  line-height: 18px;
  position: relative;
  border: 1px solid dodgerblue;
  color: dodgerblue;
  fill: dodgerblue;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  width: auto;
  cursor: pointer;
  background: white;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    opacity: 0;
  }
  
  &:active {
    background: lightblue;
  };
`;

function ImageLayout() {
    return (
        <StyledDiv>
            <UploadDiv>
                Drag and Drop images or
                <UploadButton>
                    Upload
                </UploadButton>
            </UploadDiv>
        </StyledDiv>
    );
}

export default ImageLayout;