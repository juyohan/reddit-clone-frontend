import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const SelectedButton = styled.button`
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
  color: gray;
  
  &:hover {
    background-color: lightblue;
  }
  
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

function PostSelectedButton({children, ...rest}) {

    const [isClick, setIsClick] = useState(false);

    const ClickButton = () => {
        setIsClick(true);
        if (isClick === true)
            setIsClick(false);
    }

    return (
        <SelectedButton {...rest}>
            {children}
        </SelectedButton>
    );
}

export default PostSelectedButton