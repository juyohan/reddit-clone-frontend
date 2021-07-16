import React, {useState} from 'react';
import styled from "styled-components";
import LeftMenuIcon from "./LeftMenuIcon";

const SideMenuDiv = styled.div`
    display: flex;
  flex-direction: column;
  //min-width: 200px;
  width: auto;
`

const SideMenu = styled.span`
    text-decoration: none;
  line-height: 50px;
  align-items: center;
  display: flex;
  cursor: pointer;
  color: skyblue;
`

function LeftSideMenu() {
    const [types, setTypes] = useState([
        {
            name : 'Hot',
            mode : 'hot',
            active : true
        },
        {
            name : 'New',
            mode : 'new',
            active : false
        },
        {
            name : 'Rising',
            mode : 'rising',
            active : false
        },
        {
            name : 'Top',
            mode : 'top',
            active : false
        },
        {
            name : 'Best',
            mode : 'best',
            active : false
        }
    ]);

    const onToggle = (mode) => {
        setTypes(types.map(type => type.mode === mode ?
            {...type, active : true} : {...type, active : false}));
    }

    return(
        <SideMenuDiv>
            <LeftMenuIcon types={types} onToggle={onToggle}>
            </LeftMenuIcon>
        </SideMenuDiv>
    );
}

export default LeftSideMenu;