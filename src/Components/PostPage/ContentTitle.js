import React,{useState} from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    margin-bottom: 8px;
`;

const StyledDivInner = styled.div`
    position: relative;
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

const MaxTitleWordDiv = styled.div`
    font-size: 10px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 12px;
  text-transform: uppercase;
  bottom: 12px;
  color: darkgray;
  pointer-events: none;
  position: absolute;
  right: 12px;
`;

function ContentTitle() {
    const [title, setTitle] = useState("");

    return (
        <StyledDiv>
            <StyledDivInner>
                <InputTitleDiv maxLength={"300"} placeholder={"Title"} rows={"1"}
                               onChange={function (e) {
                                   setTitle(e.target.value);
                               }}>
                </InputTitleDiv>
                {/* 몇자 적었는지 알려줌 */}
                <MaxTitleWordDiv>
                    {title.length}/300
                </MaxTitleWordDiv>
            </StyledDivInner>
        </StyledDiv>
    );
}

export default ContentTitle;