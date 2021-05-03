import React from 'react';
import styled from "styled-components";

const MenuInner = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
`;

function MenuBarInner({children, visible, ...rest}) {
    return (
        <MenuInner visible={visible} {...rest}>{children}</MenuInner>
    );
}

export default MenuBarInner;