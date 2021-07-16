import React from 'react';
import styled from "styled-components";
import PostContent from "./PostContent";

const StyledDiv = styled.div`
    font-size: 12px;
  font-weight: 200;
  line-height: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: start;
  margin: 0 8px 8px;
  position: relative;
`;

const UserImageDiv = styled.div`
    flex: 0 0 auto;
`;

const UserImageA = styled.a`
    font-size: 12px;
  font-weight: 700;
  color: black;
  display: inline;
  line-height: 20px;
  text-decoration: none;
  vertical-align: baseline;
`;

const PostInfoDiv = styled.div`
    align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  overflow: hidden;
`;

const PostInfoInnerDiv = styled.div`
    display: inline;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  align-items: center;
  color: inherit;
`;

const UserNameDiv = styled.div`
    display: inline-block;
  flex: 0 0 auto;
`;

const UserNameA = styled.a`
    font-size: 12px;
  font-weight: 700;
  color: black;
  display: inline;
  line-height: 20px;
  text-decoration: none;
  vertical-align: baseline;
`;

const OptionIcon = styled.span`
    color: darkgray;
  font-size: 6px;
  line-height: 20px;
  margin: 0 4px;
  vertical-align: middle;
`;

const OptionInfo = styled.span`
  color: rgb(120,124,126);
    flex: 0 0 auto;
  margin-right: 3px;
`;

const CreatePostTime = styled.a`
    color: rgb(120, 124, 126);
  margin-right: 3px;
  text-decoration: none;
  display: inline-block;
  flex: 0 0 auto;
  
  &:hover {
    text-decoration: underline;
  }
`;

function FeedInfoBar() {
    return(
        <StyledDiv>
            <UserImageDiv>
                <UserImageA href={"/user/"}>
                </UserImageA>
            </UserImageDiv>
            <PostInfoDiv>
                <PostInfoInnerDiv>
                    <UserNameDiv>
                        <UserNameA href={"/user/"}>
                            userName
                        </UserNameA>
                    </UserNameDiv>
                    <OptionIcon role={"presentation"}>
                    </OptionIcon>
                    <OptionInfo>
                        Posted by
                    </OptionInfo>
                    <CreatePostTime href={"/post/"} target={"_blank"} rel={"nofollow noopeener noreferrer"}>
                        21 hours ago
                    </CreatePostTime>
                </PostInfoInnerDiv>
                <PostContent>
                </PostContent>
            </PostInfoDiv>
        </StyledDiv>
    );
}

export default FeedInfoBar;