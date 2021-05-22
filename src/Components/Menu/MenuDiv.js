import React from 'react';
import styled, { css }from "styled-components";
import DefaultDiv from "../DefaultValue/DefaultDiv";


const StyledMenuDiv = styled(DefaultDiv)`
  height: inherit;
  
  //width: auto;
  background-color: white;
  display: flex;
  //justify-content: space-between;
  align-items: center;
  
  ${props => props.pad && css `
    
    padding-left: 20px;
  `}
  
  ${props => props.search && css `
    //flex-grow: ;
    padding-right: 10px;
    padding-left: 10px;
    margin-left: 16px;
    margin-right: 16px;
    border: none;
    //position: relative;
  `};
`;

function MenuDiv({children, pad, sample, search, ...rest}){
    return (
        <StyledMenuDiv pad={pad}
                       search={search}
                       sample={sample}
                       {...rest}>
            {children}</StyledMenuDiv>
    );
}

export default MenuDiv;