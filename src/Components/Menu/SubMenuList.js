import React from 'react';
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const SubA = styled(Link)`
  color: black;
  border-bottom: 4px solid white;
  height: 100%;
  text-transform: uppercase;
  position: relative;
  font-weight: 500;
  line-height: 50px;
  text-decoration: none;
  letter-spacing: unset;
  margin: 0 20px;

  &:hover {
    border-bottom: 4px solid lightgray;
  }
  
  ${props => props.menu && css`
    border-bottom: 4px solid dodgerblue;
  `}
`;

function SubMenuText({menu, onToggle}) {
    return (
        <SubA to={"/" + menu.url} menu={menu.active}
        onClick={() => {onToggle(menu.name)}}>
            {menu.name}
        </SubA>
    )
}

function SubMenuList({onToggle, menus}) {
    return (
        <>
            {menus.map(menu => (
                <SubMenuText menu={menu} onToggle={onToggle} key={menu.name}/>
            ))}
        </>
    );
}

export default SubMenuList;