import React from 'react';
import styled from "styled-components";
import ContentTitle from "./ContentTitle";
import Contents from "./Contents";
import ImageContents from "./PostPageImage/ImageContents";
import {Route} from "react-router-dom";
import LinkContents from "./PostPageLink/LinkContents";

const StyledDiv = styled.div`
  margin: 16px;
`;
const InputTitleDiv = styled.textarea`
    overflow-x: hidden;
  overflow-wrap: break-word;
  height: 39px;
  color: black;
  caret-color: skyblue;
  padding: 8px 68px 8px 16px;
  border: 1px solid lightgray;
  background-color: transparent;
  resize: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  font-family: inherit;
  
  &:focus {
    box-shadow: none;
    border: 1px solid black;
  }
`;

const ContainerDiv = styled.textarea`
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  color: black;
  caret-color: skyblue;
  background-color: white;
  font-family: Noto Sans, Arial, sans-serif;
  min-height: 122px;
  overflow: hidden;
  padding: 8px 16px;
  resize: vertical;
  border: none;
  width: 100%;
  -webkit-user-modify: read-write-plaintext-only;
  height: inherit;
  text-align: initial;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  
`;

const ContentDiv = (props) => {
    // 중복을 피하기 위해서 사용
    const {title, desc} = props.data;

    const onChange = (e) => {
        const {name, value} = e.target;

        props.setData({
            ...props.data, // 기존의 inputs의 값을 복사
            [name]: value // title 키를 가진 value로 설정
        });
    };

    // console.log(inputs);

    return (
        <StyledDiv>
            <ContentTitle titleLength={props.data.title}>
                {/* 제목 */}
                <InputTitleDiv name={"title"} value={title} maxLength={"300"} placeholder={"Title"} rows={"1"}
                               onChange={onChange}>
                </InputTitleDiv>
            </ContentTitle>


            <Route path={"/post/text"} render={() => <Contents>
                {/* 내용 */}
                <ContainerDiv name={"desc"} value={desc} spellCheck={"true"} placeholder={"Text (optional)"}
                              onChange={onChange}>
                </ContainerDiv>
            </Contents> }/>

            <Route path={"/post/image"} component={ImageContents}/>

            <Route path={"/post/link"} component={LinkContents}/>
        </StyledDiv>
    );
}

export default ContentDiv;