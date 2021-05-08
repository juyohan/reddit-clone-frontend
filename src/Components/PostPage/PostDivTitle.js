import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 4px;
  margin: 16px 0;
  border-bottom: 1px solid white;
  display: flex;
`;

const TitleDiv = styled.div`
    font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: black;
  flex: 1;
  padding-bottom: 13px;
`;

function PostDivTitle() {
    return (
        <StyledDiv>
            <TitleDiv>
                Create a post
            </TitleDiv>
        </StyledDiv>
    );
}

export default PostDivTitle;