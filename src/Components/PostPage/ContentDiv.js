import React from 'react';
import styled from "styled-components";
import ContentTitle from "./ContentTitle";
import Contents from "./Contents";

const StyledDiv = styled.div`
    margin: 16px;
`;

function ContentDiv () {
    return (
        <StyledDiv>
            <ContentTitle>

            </ContentTitle>
            <Contents>

            </Contents>
        </StyledDiv>
    );
}

export default ContentDiv;