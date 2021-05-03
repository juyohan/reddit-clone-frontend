import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import DefaultDiv from "../DefaultValue/DefaultDiv";
import {Link, Route} from "react-router-dom";
import GoPost from "../PostPage/GoPost";
import PostInput from "./PostInput";
import BottomLayout from "../Layout/BottomLayout";
import PostLayout from "../PostPage/PostLayout";

const StyledPost = styled(DefaultDiv)`
  background-color: white;
  border-radius: 4px;
  border: 1px solid lightgray;
  margin-bottom: 16px;
  display: flex;
  padding: 8px;
`;

const StyledIcon = styled(Link)`
  flex-basis: 38px;
  margin-right: 8px;
  border-radius: 50%;
  width: 38px;
  height: 38px;
`;

const StyledIconInner = styled(DefaultDiv)`
  position: relative;

  ${props => props.pos && css`
    width: 38px;
    height: 38px;
    border-radius: 50%;

  `}
`;

const BackGroundIcon = styled(DefaultDiv)`
  opacity: 0.35;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: limegreen;
`;

const StyledCircle = styled(DefaultDiv)`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const PostIcon = styled.a`
  color: red;
  font-size: 16px;
  width: 100%;
  display: block;
  transform-origin: bottom center;
  transform: scale(1.3);
`;

const StyledImage = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  min-height: 40px;
  min-width: 40px;
  fill: mediumslateblue;
  border-radius: 4px;

  &:hover {
    background-color: powderblue;
  }
`;

const StyledUrl = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  min-height: 40px;
  min-width: 40px;
  fill: gray;
  border-radius: 4px;

  &:hover {
    background-color: powderblue;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  flex-grow: 1;
  box-sizing: border-box;
  display: block;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: none;
  color: black;
  margin-right: 8px;
`;

function CreatePost() {

    // const [toPost, setToPost] = useState(BottomLayout);
    //
    // const CreateToPost = () => {
    //     setToPost(PostLayout);
    // }

    return (
        <StyledPost>
            {/* 아이콘 누르면 자기 페이지로 */}
            <StyledIcon to={"/user"}>
                <StyledIconInner>
                    <StyledIconInner pos>
                        <BackGroundIcon>
                        </BackGroundIcon>
                        <StyledCircle>
                            <PostIcon>
                                icon
                            </PostIcon>
                        </StyledCircle>
                    </StyledIconInner>
                </StyledIconInner>
            </StyledIcon>

            {/* post 누르면 작성하는 페이지로 변환 */}
            <StyledLink to={"/api/get/data"}>
                <PostInput role={"button"}>
                </PostInput>
            </StyledLink>

            {/* 이미지나 영상을 올리는 페이지로 변환 */}
            <StyledImage to={"/submit?image"}>
                <svg viewBox={"0 0 20 20"} height={"20px"} width={"20px"} xmlns={"http://www.w3.org/2000/svg"}>
                    <path fill={"inherit"} fillRule={"evenodd"}
                          d={"m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"}/>
                </svg>
            </StyledImage>
            {/* 파일을 올리는 페이지로 변환 */}
            <StyledUrl to={"/submit?url"}>
                <svg viewBox={"0 0 20 20"} height={"20"} width={"20"} xmlns={"http://www.w3.org/2000/svg"}>
                    <path
                        d={"M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"}/>
                    <path
                        d={"M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"}/>
                </svg>
            </StyledUrl>
        </StyledPost>
    );
}

export default CreatePost;