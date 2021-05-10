import React from 'react';
import styled from "styled-components";
import DefaultDiv from "../DefaultValue/DefaultDiv";
import CreatePost from "../PheedBar/CreatePost";
import SelectType from "../PheedBar/SelectType";
import Pheed from "../MainPheed/Pheed";

const BottomDiv = styled(DefaultDiv)`
  z-index: 3;
`

const BottomInner = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  //padding: 20px 24px;

  @media (min-width: 640px) {
    padding: 20px 24px;
  }
`
const StyledPheed = styled(DefaultDiv)`
  width: 100%;
  min-width: 0;
`;

const StyledSideMenu = styled(DefaultDiv)`
  width: 24%;
  padding: 100px 50px 0px;
`;


// 피드 선택에 따라 어떻게 나열할 것인지 달라지는 것을 넣어야함

function BottomLayout() {
    return (
        <DefaultDiv bottom>
                <BottomDiv>
                    <BottomInner>
                        {/* 사이드 메뉴들 */}
                        <StyledSideMenu>


                        </StyledSideMenu>
                        <StyledPheed>
                            {/* 게시글 작성 칸 */}
                            <CreatePost>
                            </CreatePost>

                            {/* 최신순, 베스트순, 피드형, 목록형 등등  */}
                            <SelectType>
                            </SelectType>

                            {/* 실질적인 데이터 내용들 */}
                            <Pheed>
                            </Pheed>

                        </StyledPheed>
                    </BottomInner>
                </BottomDiv>
        </DefaultDiv>
    );
}

export default BottomLayout;