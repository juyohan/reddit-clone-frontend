import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";

const StyledButton = styled.button`
    position: fixed;
  bottom: 40px;
  right: 0;
  border: none;
  padding: 5px 15px;
  font-size: 13px;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
  font-weight: bold;
  background-color: rgba(245, 245, 245, 0.6);
  box-shadow: 1px 3px 0 rgb(0, 0, 0, 0.2);
  visibility: hidden;

  &:hover {
    background-color: white;
  }
  
  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.2);
  }
  
  ${props => props.btn && css`
    visibility: visible;
  `}
`

function QuickTopContainer() {
    const [scrollY, setScrollY] = useState(0);
    const [btnStatus, setBtnStatus] = useState(false);

    const handleTop = () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        });
        setScrollY(0);
        setBtnStatus(false);
    }

    const handleFollow = () => {
        setScrollY(window.scrollY);
        if (window.scrollY > 170)
            setBtnStatus(true);
        else
            setBtnStatus(false);
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        }
        watch();
        return () => {
            window.removeEventListener('scroll',handleFollow);
        }
    });
    return (
        <StyledButton onClick={handleTop} btn={btnStatus}>
            맨 위로
        </StyledButton>
    );
}

export default QuickTopContainer;