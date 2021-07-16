import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const TitleContainer = styled.div`
    margin: 0 8px;
  cursor: pointer;
`

const Titlediv = styled.div`
    display: inline;
  position: relative;
  text-decoration: none;
  word-break: break-word;
`

const TextDiv = styled(Link)`
  text-decoration: none;
  color: inherit;
    font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  display: inline;
  padding-right: 5px;
  word-wrap: break-word;
`

function FeedTitle() {
    return (
        <TitleContainer>
            <Titlediv>
                <TextDiv>
                    sdfsdf
                </TextDiv>
            </Titlediv>
        </TitleContainer>
    );
}

export default FeedTitle;