import React, {useState} from 'react';
import styled, {css} from "styled-components";

import MenuBarInner from "../Menu/MenuBarInner";
import DefaultButton from "../DefaultValue/DefaultButton";
import LayoutDiv from "./LayoutDiv";
import MenuIcon from "../Menu/MenuIcon";
import MenuWrap from "./MenuWrap";
import MenuDiv from "../Menu/MenuDiv";
import MenuSearch from "../Menu/MenuSearch";
import SubMenu from "../Menu/SubMenu";
import AuthContainer from "../AuthWrap/AuthContainer";

const StyledSvg = styled.svg`
  padding-left: 5px;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  background-color: white;
  border-radius: 5px;
    display: flex;
  align-items: center;
  
  ${props => (props.open === false) && css `
    border: none;
  `}
`;

const MenuBarDiv = styled.div`
    display: flex;
  flex-direction: row;
  //place-content: center space-between;
  
  align-items: center;
  width: inherit;
  height: 50px;
  background-color: white;
`;

function MenuLayout() {
    const [isVisible, setIsVisible] = useState(false);

    const ClickMenu = () => {
        setIsVisible(true);
        if (isVisible === true) {
            setIsVisible(false);
        }
    }

    return (
        <MenuBarInner>
            <MenuBarDiv>
                {/* 1. 아이콘, 홈페이지 이름 입니다. */}
                <MenuDiv pad>
                    {/*<MenuIcon to={"/"}>*/}
                    {/*    /!* image 넣은 장소 *!/*/}
                    {/*    <MenuDiv sample>*/}
                    {/*    </MenuDiv>*/}
                    {/*    <MenuSpan>*/}
                    {/*        hello*/}
                    {/*    </MenuSpan>*/}
                    {/*</MenuIcon>*/}
                    <MenuIcon to={"/"}>
                    </MenuIcon>

                </MenuDiv>
                {/* 2. 메뉴들 */}
                <SubMenu>
                </SubMenu>


                {/* 3. 검색 메뉴 입니다. */}
                <MenuDiv search>
                    <StyledDiv open={isVisible}>
                        <StyledSvg viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"} type={"button"} onClick={ClickMenu}>
                            <path
                                d={"M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"}/>
                        </StyledSvg>
                        <MenuSearch open={isVisible}>
                        </MenuSearch>
                    </StyledDiv>
                </MenuDiv>
                {/* 4. 로그인 하는 버튼 */}
                <AuthContainer>

                </AuthContainer>

            </MenuBarDiv>
        </MenuBarInner>
    );
}

export default MenuLayout;