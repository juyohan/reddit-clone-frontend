import React from 'react';
import styled from "styled-components";
import DefaultDiv from "../DefaultValue/DefaultDiv";
import CreatePost from "../PheedBar/CreatePost";
import SelectType from "../PheedBar/SelectType";
import FeedContainer from "../MainFeed/FeedContainer";
import BottomRightContainer from "../BottomRight/BottomRightContainer";
import LeftContainer from "../BottomLeft/LeftContainer";
import {Route, Switch} from "react-router-dom";

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

function BottomLayout({match, location, history}) {
    // console.log(JSON.stringify(match,null,2));
    // console.log(JSON.stringify(location,null,2));
    // console.log(JSON.stringify(history,null,2));
    // console.log("hello " + match.path);

    return (
        <DefaultDiv bottom>
                <BottomDiv>
                    <BottomInner>
                        {/* 사이드 메뉴들 */}
                        <LeftContainer>
                        </LeftContainer>

                        <StyledPheed>
                            {/* 게시글 작성 칸 */}
                            <CreatePost>
                            </CreatePost>

                            <BottomRightContainer>
                            </BottomRightContainer>

                            {/* 실질적인 데이터 내용들 */}
                            {/*<Route path={"/"} component={Feed}/>*/}
                            {/*<Feed>*/}
                            {/*</Feed>*/}
                            {/*<Switch>*/}
                            {/*    <Route path={["/hot", "/"]} exact={true} component={FeedContainer}/>*/}
                            {/*    <Route path={"/new"} component={FeedContainer}/>*/}
                            {/*    <Route path={"/top"} component={FeedContainer}/>*/}
                            {/*    <Route path={"/rising"} component={FeedContainer}/>*/}
                            {/*    <Route path={"/best"} component={FeedContainer}/>*/}
                            {/*</Switch>*/}

                            <Route path={[`${match.path}/hot`, `/`]} exact component={FeedContainer}/>
                            <Route path={match.path} component={FeedContainer}/>

                        </StyledPheed>
                    </BottomInner>
                </BottomDiv>
        </DefaultDiv>
    );
}

export default BottomLayout;