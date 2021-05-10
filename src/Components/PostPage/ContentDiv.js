import React, {useState} from 'react';
import styled from "styled-components";
import ContentTitle from "./ContentTitle";
import Contents from "./Contents";
import ImageContents from "./PostPageImage/ImageContents";
import {Route} from "react-router-dom";
import LinkContents from "./PostPageLink/LinkContents";

const StyledDiv = styled.div`
  margin: 16px;
`;

const ContentDiv = (props) => {

    return (
        <StyledDiv>
            <ContentTitle setData={props.setData}>

            </ContentTitle>
            <Route path={"/api/data/post/content/"} component={Contents}/>
            <Route path={"/api/data/post/image/"} component={ImageContents}/>
            <Route path={"/api/data/post/link/"} component={LinkContents}/>
        </StyledDiv>
    );
}

export default ContentDiv;