import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
  //  display: flex;
  //align-items: flex-start;
  //flex-direction: row;
  //justify-content: space-between;
  padding: 0 16px 16px;
  background-color: white;
`;

const SplitDiv = styled.div`
    position: relative;
`;

const ButtonDiv = styled.div`
    flex-direction: row-reverse;
  display: flex;
  align-items: center;
`;

const ButtonInnerDiv = styled.div`
    box-sizing: border-box;
  display: flex;
  
  @media( min-width: 189px) {
    width: 82px;
    margin-left: 8px;
  }
`;

const PostButton = styled.button`
    cursor: not-allowed;
  filter: grayscale(1);
  background-color: skyblue;
  color: white;
  fill: white;
  width: 100%;
  position: relative;
  border: none;
  font-family: Noto Sans, Arial, sans-serif ;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    opacity: 0;
  }
`;

function PostDataLayout() {
    return (
        <StyledDiv>
            <SplitDiv>
                <ButtonDiv>
                    <ButtonInnerDiv>
                        {/* 내용물을 채우면 전송하기 버튼 활성화 */}
                        <PostButton role={"button"} tabindex={"0"}>
                            Post
                        </PostButton>
                    </ButtonInnerDiv>
                </ButtonDiv>
            </SplitDiv>
        </StyledDiv>
    );
}

export default PostDataLayout;