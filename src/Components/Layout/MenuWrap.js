import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Link, Route} from 'react-router-dom';

import DefaultDiv from "../DefaultValue/DefaultDiv";
import AuthLogin from "../AuthWrap/AuthLogin";
import AuthRegister from "../AuthWrap/AuthRegister";
import Dialog from "../AuthWrap/Dialog";

const WrapOutDiv = styled(DefaultDiv)`
  width: 200px;
  height: 100vh;
  background-color: brown;
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 15;
  display: inline-block;
`;

const WrapInner = styled(DefaultDiv)`
  display: flex;
  position: relative;
  z-index: 2;
  height: inherit;
  justify-content: space-between;
  background-color: salmon;
  padding: 0 0 0 36px;
  margin: auto 0;
`;

const WrapInnerDiv = styled(DefaultDiv)`
  flex: 1;
  max-height: inherit;
  width: inherit;
  height: inherit;
  position: relative;
  background-color: lightblue;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
`;

const SubWrapDiv = styled(DefaultDiv)`
  height: 100%;
  background-color: peru;
  border: 1px solid black;

  ${props => props.account && css`
    max-height: 60px;
  `}
`;

const SubInnerDiv = styled(DefaultDiv)`
  padding: 20px 15px 20px 20px;
  height: inherit;
  background-color: limegreen;
  //justify-content: flex-end;
  //align-content: flex-end;
  //align-items: flex-end;
`;

const SubDiv = styled(DefaultDiv)`
  height: 60px;
  margin-bottom: 20px;
  width: inherit;
  background-color: seashell;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledA = styled.a`
  font-weight: 500;
  font-size: 30px;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration-line: underline;
  }

  &:active {

  }
`;

const UserInnerDiv = styled(DefaultDiv)`
  height: inherit;
  width: inherit;
  padding: 10px 10px;
  background-color: turquoise;
  display: flex;
  justify-content: space-between;
`;

const LoginDiv = styled(DefaultDiv)`
    height: inherit;
  margin: 0 5px;
  width: 50%;
  background-color: firebrick;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${props => props.login && css`
    width: 60%;
  `}
`;

const LoginLink = styled(Link)`
    padding: 10px 10px;
  width: 100%;
  height: 100%;
  font-size: 13px;
  text-decoration: none;
`;

function MenuWrap({visible}) {
    const [isPut, setIsPut] = useState(false);

    const OpenDialog = () => {
        setIsPut(true);
    }

    const CloseDialog = () => {
        setIsPut(false);
    }

    if (!visible)
        return null;

    return (
        <WrapOutDiv visible={visible}>
            <WrapInner>
                <WrapInnerDiv>
                    {/* 로그인, 회원가입 하는 곳 */}
                    <SubWrapDiv account>
                        {/* 로그인을 못 했을 때 */}
                        <UserInnerDiv>
                            {/* 로그인 */}
                            <LoginDiv>
                                <LoginLink login onClick={OpenDialog} to={"/auth/login"}>
                                    로그인
                                </LoginLink>
                            </LoginDiv>

                            {/* 회원가입 */}
                            <LoginDiv login>
                                <LoginLink login onClick={OpenDialog} to={"/auth/register"}>
                                    회원가입
                                </LoginLink>
                            </LoginDiv>

                            {/* 로그인 창 띄우기 */}
                            <Dialog open={isPut} close={CloseDialog}>
                                {/* 여기가 children 자리 */}
                                <Route path="/auth/login" component={AuthLogin}/>
                                <Route path="/auth/register" component={AuthRegister}/>
                            </Dialog>
                        </UserInnerDiv>
                        {/* 로그인 했을 때 */}

                    </SubWrapDiv>
                    {/* 서브 메뉴 목록 */}
                    <SubWrapDiv>
                        <SubInnerDiv>
                            {/* 메뉴 목록 */}
                            <SubDiv>
                                <StyledA href={"/home/"}>
                                    Group
                                </StyledA>
                            </SubDiv>
                            <SubDiv>

                            </SubDiv>
                            <SubDiv>

                            </SubDiv>
                        </SubInnerDiv>
                    </SubWrapDiv>
                </WrapInnerDiv>
            </WrapInner>
        </WrapOutDiv>
    );
}

export default MenuWrap;