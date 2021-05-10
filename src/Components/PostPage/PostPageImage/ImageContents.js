import React from 'react';
import styled from "styled-components";
import ImageLayout from "./ImageLayout";

const StyledDiv = styled.div`
    border-radius: 4px;
  background: white;
`;

const StyledInner = styled.div`
    position: relative;
`;

const StyledInput = styled.input`
    display: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  
`;


function ImageContents() {
    return (
        <StyledDiv>
            <div>
                <StyledInner>
                    {/* input */}
                    <StyledInput type={"file"} accept={"image/png,image/gif,image/jpeg,video/mp4,video/quicktime"} multiple>

                    </StyledInput>

                    <ImageLayout>
                    </ImageLayout>
                </StyledInner>
            </div>
        </StyledDiv>
    );
}

export default ImageContents;