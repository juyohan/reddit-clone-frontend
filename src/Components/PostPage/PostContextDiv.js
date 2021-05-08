import React from 'react';
import styled from "styled-components";
import SelectTypeContent from "./SelectTypeContent";
import {Route} from "react-router-dom";
import ContentDiv from "./ContentDiv";

const StyledDiv = styled.div`
    background-color: white;
  margin-bottom: 15px;
  border-radius: 5px;
`;

function PostContextDiv () {
    return (
        <StyledDiv>
            <SelectTypeContent>

            </SelectTypeContent>
            <ContentDiv>

            </ContentDiv>
        </StyledDiv>
    );
}

export default PostContextDiv;