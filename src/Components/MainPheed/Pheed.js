import React from 'react';
import styled from 'styled-components'
import PheedInfoBar from "./PheedInfoBar";

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
`;

const PostInnerDiv = styled.div`
    position: relative;
  background: white;
  padding-top: 8px;
`;


function Pheed() {
    return (
        <StyledDiv>
            <PostDiv>
                <PostInnerDiv>
                    <PheedInfoBar>
                    </PheedInfoBar>


                </PostInnerDiv>
            </PostDiv>
        </StyledDiv>
    );
}

export default Pheed;