import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const StyledDiv = styled.div`
  background-color: white;
    display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: inherit;
  font-size: 14px;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
`;

const SubA = styled(Link)`
  color: black;
  border-bottom: 4px solid white;
  height: 100%;
  text-transform: uppercase;
  position: relative;
  font-weight: 500;
  line-height: 50px;
  text-decoration: none;
  letter-spacing: unset;
  margin: 0 20px;
  
  &:hover {
    border-bottom: 4px solid lightgray;
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  padding: 0 15px;

  &:enabled {

  }
`;

function SubMenu() {
    const [isClick, setIsClick] = useState(false);

    const onClick = (e) => {
        e.preventDefault();
        const {name} = isClick;


    }

    return(
        <StyledDiv>
            <SubA to={"/"} >
                {/*<StyledSpan enabled={isClick}>*/}
                    HOME
                {/*</StyledSpan>*/}
            </SubA>
            <SubA to={"/group"}>
                <StyledSpan>
                    GROUP
                </StyledSpan>
            </SubA>
            <SubA to={"/api/data/post"}>
                POST
            </SubA>
        </StyledDiv>
    );
}

export default SubMenu;