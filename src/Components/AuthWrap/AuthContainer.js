import React, {useState} from "react";
import styled from "styled-components";
import {Link, useHistory} from "react-router-dom";
import Dialog from "./Dialog";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";

const StyledDiv = styled.div`
  height: inherit;
  //width: auto;
  background-color: white;
  display: flex;
  //justify-content: space-between;
  //border: 1px solid black;
  align-items: center;
`

const StyledInnerDiv = styled.div`
  width: auto;
  border: none;
  display: flex;
  justify-content: center;
`

const StyledLink = styled(Link)`
  padding: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 16px;
  flex-wrap: nowrap;
  text-decoration: none;
  text-transform: none;
  color: black;

`

function AuthContainer() {
    const [isPut, setIsPut] = useState(false);
    const [mode, setMode] = useState({
        mode : 'login'
    })

    const OpenDialog = (e) => {
        e.preventDefault();
        setIsPut(true);
    }

    const CloseDialog = () => {
        setIsPut(false);
        setMode({
            mode : 'login'
        })
    }

    return (
        <>
            {/* 여기서 로그인 한 사람과 안한 사람의 보여지는 UI가 다름 */}
            <StyledDiv>
                <StyledInnerDiv>
                    <StyledLink onClick={OpenDialog} to={"/auth/login"}>
                        Sign In
                    </StyledLink>
                    <Dialog open={isPut} close={CloseDialog} setMode={setMode}>
                        {/*여기가 children 자리 */}
                        {(() => {
                            if (mode.mode === 'login')
                                return (
                                    <AuthLogin setMode={setMode} close={setIsPut}/>
                                )
                            else if (mode.mode === 'register')
                                return (
                                    <AuthRegister setMode={setMode}/>
                                )
                        })()}
                    </Dialog>
                </StyledInnerDiv>
            </StyledDiv>
        </>
    );
}

export default AuthContainer;