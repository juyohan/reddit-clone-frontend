import React from 'react';
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  overflow-wrap: break-word;
  height: 66px;
  background: transparent;
  border: 1px solid lightgray;
  margin-top: 8px;
  min-height: 66px;
  padding: 8px 16px;
  resize: none;
  box-sizing: border-box;
  overflow: hidden;
  display: block;
  width: 100%;
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  font-family: Noto Sans, Arial, sans-serif;
`;

function LinkContents () {
    return (
        <div>
            <StyledTextarea placeholder={"Url"}>
            </StyledTextarea>
        </div>
    );
}

export default LinkContents;