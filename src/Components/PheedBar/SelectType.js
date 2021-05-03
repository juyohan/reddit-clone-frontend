import React from 'react';
import styled from "styled-components";
import ButtonType from "./ButtonType";
import AlignType from "./AlignType";
import SelectViewType from "./SelectViewType";

const StyledBar = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  align-items: center;
  display: flex;
  border-radius: 4px;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin-bottom: 16px;
  padding: 10px 12px;
`;

const TypeWrap = styled.div`
  @media (min-width: 672px) {
    display: none;
  }
  align-items: center;
  cursor: pointer;
  display: flex;
  border-radius: 20px;
  margin-right: 8px;
  padding: 6px 8px;
`;

const TypeDiv = styled.div`
  @media (max-width: 671px) {
    display: none;
  }
  align-items: center;
  cursor: pointer;
  display: flex;
`;

const ViewType = styled.div`
  margin-left: auto;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
`;

function SelectType() {
    return (
        <StyledBar>
            <TypeWrap>
                <ButtonType>
                </ButtonType>
            </TypeWrap>
            <TypeDiv>
                <AlignType>
                </AlignType>
            </TypeDiv>
            <ViewType>
                <SelectViewType>
                </SelectViewType>
            </ViewType>
        </StyledBar>
    );
}

export default SelectType;