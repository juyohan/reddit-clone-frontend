import React from 'react';
import styled from "styled-components";

const MenuInner = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;
`;

function MenuBarInner({children, visible, ...rest}) {
    return (
        <MenuInner visible={visible} {...rest}>{children}</MenuInner>
    );
}

export default MenuBarInner;