import React from 'react';
import styled from "styled-components";

const ContentTitleDiv = styled.div`
    margin: 0 8px;
`;

const ContentTitle = styled.div`
    display: inline;
  position: relative;
  text-decoration: none;
  word-break: break-word;
`;

const ContentTitleA = styled.a`
    color: inherit;
`;

const ContentDiv = styled.div`
    margin-top: 8px;
`;

const Content = styled.div`
    position: relative;
  background: white;
  max-height: 512px;
  cursor: pointer;
`;

function PostContent() {
    return (
        <>
            <ContentTitleDiv>
                <ContentTitle>
                    <ContentTitleA href={"/post/"}>
                    </ContentTitleA>
                </ContentTitle>
            </ContentTitleDiv>
            <ContentDiv>
                <Content>
                </Content>
            </ContentDiv>
        </>
    );
}

export default PostContent;