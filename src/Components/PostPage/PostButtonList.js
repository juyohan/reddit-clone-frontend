import React, {useRef} from 'react';
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import PostSvgList from "./PostSvgList";

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
  color: gray;


  ${props => props.type && css`
    color: skyblue;
    fill: skyblue;

    &::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      background-color: currentColor;;
      bottom: -1px;
      height: 2px;
    }
  `}
`

function PostButton({type, onToggle}) {

    const handleChangeMode = () => {
        onToggle(type.mode);
    }

    return (
        <>
            <SelectedButton to={"/post/"+type.mode} type={type.active}
                            onClick={handleChangeMode}
            >
                <PostSvgList type={type.mode} />
                {type.name}
            </SelectedButton>
        </>
    );
}

function PostButtonList({types, onToggle}) {
    return (
        <>
            {types.map(type => (
                <PostButton type={type} onToggle={onToggle} key={type.name}/>
            ))
            }
        </>
    )
}

export default PostButtonList;