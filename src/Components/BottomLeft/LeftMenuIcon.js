import React from 'react';
import styled, {css} from "styled-components";
import LeftMenuSvgList from "./LeftMenuSvgList";
import {Link} from "react-router-dom";

const StyledSpan = styled(Link)`
  text-decoration: none;
  line-height: 50px;
  align-items: center;
  font-size: 17px;
  //font-weight: 500;
  display: flex;
  cursor: pointer;
  color: black;
  
  ${props => props.type && css`
    color: mediumslateblue;
  `}
`

function LeftMenuSpan({type, onToggle}) {
    const handleClickButton = () => {
        onToggle(type.mode);
    }

    return (
        <>
            <StyledSpan to={"/" + type.mode} type={type.active} onClick={handleClickButton}>
                <LeftMenuSvgList type={type.mode}/>
                {type.name}
            </StyledSpan>
        </>
    );
}


function LeftMenuIcon({types, onToggle}) {
    return(
        <>
            {types.map(type => (
                <LeftMenuSpan type={type} key={type.name} onToggle={onToggle}/>)
            )}
        </>
    );
}

export default LeftMenuIcon;