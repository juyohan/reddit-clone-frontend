import React, {useState} from 'react';
import styled from "styled-components";
import SubMenuList from "./SubMenuList";

const StyledDiv = styled.div`
  background-color: white;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: inherit;
  font-size: 14px;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
`;

function SubMenu() {
    const [menus, setMenus] = useState([
        {
            url: '',
            name : 'HOME',
            active: true
        },
        {
            url: 'group',
            name: 'GROUP',
            active: false
        },
        {
            url: 'api/data/post/text',
            name: 'POST',
            active: false
        }
    ]);

    const onToggle = (name) => {
        setMenus(menus.map(menu =>
            menu.name === name ? { ...menu, active: true}
                : {...menu, active : false})
        );
    }

    return (
        <StyledDiv>
            <SubMenuList menus={menus} onToggle={onToggle} />
        </StyledDiv>
    );
}

export default SubMenu;