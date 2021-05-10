import React from 'react';
import styled from "styled-components";
import ContentTitle from "./ContentTitle";
import Contents from "./Contents";
import {Route} from "react-router-dom";

const StyledDiv = styled.div`
    margin: 16px;
`;

function ContentDiv () {
    return (
        <StyledDiv>
            <ContentTitle>

            </ContentTitle>
            <Route path={"/api/data/post/content/"} component={Contents}/>
            {/*<Route path={"/api/get/data/image/"} component={Image}/>*/}
        </StyledDiv>
    );
}

export default ContentDiv;