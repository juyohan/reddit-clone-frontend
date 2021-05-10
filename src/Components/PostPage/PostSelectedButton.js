import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const StyledColor = css`
  color: gray;
  
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    background-color: currentColor;
    bottom: -1px;
    height: 2px;
  }
`;

const SelectedButton = styled(Link)`
  text-decoration: none;
    background: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  padding: 15px 24px;
  z-index: 1;
  position: relative;
  flex: 1;
  text-align: center;
  border-color: lightgray;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${StyledColor};
  
  &:hover {
    background-color: lightblue;
  }

  &:focus {
    color: skyblue;
    fill: skyblue;
  }
`;

function PostSelectedButton({children, ...rest}) {

    return (
        <SelectedButton {...rest}>
            {children}
        </SelectedButton>
    );
}

export default PostSelectedButton