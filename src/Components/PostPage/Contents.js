import React from 'react';
import styled, {css} from "styled-components";
import WriteTypes from "./PostPageContent/WriteTypes";
import WriteContent from "./PostPageContent/WriteContent";

const StyledDiv = styled.div`
  position: relative;
`;

const StyledDivInner = styled.div`
  border-radius: 4px;
  border: 1px solid lightgray;
  position: relative;
  background: white;
  
  ${props => props.set && css `
    border: 1px solid black;
  `}
`;

function Contents({children}) {
    return (
        <div>
            <StyledDiv>
                {/* 해당 div 클릭시 border 라인 생성 */}
                <StyledDivInner>
                    <WriteTypes>

                    </WriteTypes>
                    <WriteContent>
                        {children}
                    </WriteContent>
                </StyledDivInner>
            </StyledDiv>
        </div>
    );
}

export default Contents;