import React from 'react';
import styled from "styled-components";
import PostDivTitle from "./PostDivTitle";
import PostContextDiv from "./PostContextDiv";
import PostDataLayout from "./PostDataLayout";

const Div = styled.div`
  transition: margin-top .3s ease;
  padding-top: 50px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 50px);
`;

const IndexDiv = styled.div`
  z-index: 3;
`;

const PostDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1248px;

  @media (min-width: 640px) {
    padding: 20px 24px;
  }
`;

const PostInnerDiv = styled.div`
  flex: 1 1 100%;
  min-width: 0;
  width: 100%;
`;

const InnerDiv = styled.div`
  @media (max-width: 960px) {
    padding: 0 8px;
  }
`;

const BackGroundDiv = styled.div`
    min-height: 100%;
  overflow: hidden;
  position: relative;
  flex: none;
  
  &::before {
    content: " ";
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: lightgray;
  }
`;

function PostLayout() {
    return (
        <Div>
            <StyledDiv>
                <BackGroundDiv/>
                <IndexDiv>
                    <PostDiv>
                        <PostInnerDiv>
                            <InnerDiv>
                                {/* 위의 타이틀 */}
                                <PostDivTitle>

                                </PostDivTitle>

                                {/* 그룹 선택 */}

                                {/* post main */}
                                <PostContextDiv>

                                </PostContextDiv>
                            </InnerDiv>
                        </PostInnerDiv>
                    </PostDiv>
                </IndexDiv>
            </StyledDiv>
        </Div>
    );
}

export default PostLayout;