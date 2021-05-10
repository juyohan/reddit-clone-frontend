import React from 'react';
import styled from "styled-components";
import SelectTypeContent from "./SelectTypeContent";
import ContentDiv from "./ContentDiv";
import PostDataLayout from "./PostDataLayout";
import {Route} from "react-router-dom";

const StyledDiv = styled.div`
    background-color: white;
  margin-bottom: 15px;
  border-radius: 5px;
`;

function PostContextDiv () {
    return (
        <StyledDiv>
            {/* 해당 버튼에 의해 */}
            <SelectTypeContent>

            </SelectTypeContent>
            {/* 안에 내용물이 바뀜 */}
            <ContentDiv>

            </ContentDiv>
            <PostDataLayout>
            </PostDataLayout>
        </StyledDiv>
    );
}

export default PostContextDiv;