import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Aligner = styled.div`
    margin-top: 1rem;
    text-align: right;
  font-size: 0.8rem;
`;

const StyledLink = styled(Link)`
    color: gray;
    &:hover {
        color: darkgray;
    }
`

function RightRegister({children, to}) {
    return(
        <Aligner>
            <StyledLink to={to}>
                {children}
            </StyledLink>
        </Aligner>
    );
}

export default RightRegister;