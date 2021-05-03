import React from 'react';
import styled from "styled-components";

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

function AuthContent({title, children}) {
    return (
        <div>
            <Title>{title}</Title>
            {children}
        </div>
    );
}

export default AuthContent