import React from 'react';
import styled from 'styled-components'
import FeedInfoBar from "./FeedInfoBar";
import FeedLikes from "./FeedLikes";
import FeedTitle from "./FeedTitle";
import FeedMain from "./FeedMain";
import FeedBottom from "./FeedBottom";

const StyledDiv = styled.div`
    min-height: 1000px;
  width: 100%;
`;

const PostDiv = styled.div`
    cursor: pointer;
  transition: color .5s, fill .5s, box-shadow .5s;
  border: 1px solid lightgray;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  
  @media(min-width: 640px) {
    border-radius: 4px;
    padding-left: 40px;
  }
`;

const PostInnerDiv = styled.div`
    position: relative;
  background: white;
  padding-top: 8px;
`;


function FeedContainer({match, location, history}) {
    console.log("match : " + JSON.stringify(match,null,2));
    console.log("location : " + JSON.stringify(location,null,2));
    console.log("history : " + JSON.stringify(history,null,2));


    return (
        <StyledDiv>
            <PostDiv>
                <FeedLikes>

                </FeedLikes>

                <PostInnerDiv>
                    <FeedInfoBar>
                    </FeedInfoBar>

                    <FeedTitle>
                    </FeedTitle>

                    <FeedMain>
                    </FeedMain>

                    <FeedBottom>
                    </FeedBottom>
                </PostInnerDiv>
            </PostDiv>
        </StyledDiv>
    );
}

export default FeedContainer;