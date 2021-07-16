import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const BottomContainer = styled.div`
    align-items: center;
  display: flex;
  flex-direction: row;
  height: 40px;
  padding-right: 10px;
  overflow-y: hidden;
`

const ContainerInner = styled.div`
    font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  align-items: stretch;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 0 8px 0 4px;
  flex-grow: 1;
`

const CommentLink = styled(Link)`
    padding: 8px;
  word-break: normal;
  margin-right: 4px;
  align-items: center;
  display: flex;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  box-sizing: border-box;
  text-decoration: inherit;
  color: inherit;
`

const StyledSvg = styled.svg`
  margin-top: 2px;
  margin-right: 5px;
  height: 1.2em;
  width: 1.2em;
  stroke-width: 0;
  fill: currentColor;
  stroke: currentColor;
`

function FeedBottom() {
    return (
        <BottomContainer>
            <ContainerInner>
                <CommentLink>
                    <StyledSvg viewBox={"0 0 60 60"} xmlns={"http://www.w3.org/2000/svg"}>
                        <path d={"M54,2H6C2.748,2,0,4.748,0,8v33c0,3.252,2.748,6,6,6h28.558l9.703,10.673C44.454,57.885,44.724,58,45,58  c0.121,0,0.243-0.022,0.361-0.067C45.746,57.784,46,57.413,46,57V47h8c3.252,0,6-2.748,6-6V8C60,4.748,57.252,2,54,2z M58,41  c0,2.168-1.832,4-4,4h-9c-0.552,0-1,0.448-1,1v8.414l-8.243-9.068l-4.998-5.811c-0.36-0.418-0.991-0.466-1.411-0.106  c-0.418,0.36-0.466,0.992-0.106,1.41L32.821,45H6c-2.168,0-4-1.832-4-4V8c0-2.168,1.832-4,4-4h48c2.168,0,4,1.832,4,4V41z"}/>
                    </StyledSvg>
                    Comment
                </CommentLink>
            </ContainerInner>
        </BottomContainer>
    );
}

export default FeedBottom;