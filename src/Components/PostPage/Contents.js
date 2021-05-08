import React from 'react';
import styled from "styled-components";
import WriteTypes from "./WriteTypes";
import WriteContent from "./WriteContent";

const StyledDiv = styled.div`
  position: relative;
`;

const StyledDivInner = styled.div`
  border-radius: 4px;
  border: 1px solid lightgray;
  position: relative;
  background: white;
`;

function Contents() {
    return (
        <div>
            <StyledDiv>
                <StyledDivInner>
                    <WriteTypes>

                    </WriteTypes>
                    <WriteContent>

                    </WriteContent>
                </StyledDivInner>
            </StyledDiv>
        </div>
    );
}

export default Contents;