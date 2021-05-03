import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  border-radius: 5px;
  border: none;
  height: 38px;
  width: 100%;
  outline: none;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;



function PostInput({children, ...rest}) {
    return (
        <>
            <StyledInput placeholder={"Create Post"} type={"text"} {...rest}>
            </StyledInput>
        </>
    );
}

export default PostInput;