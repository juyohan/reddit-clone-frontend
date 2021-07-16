import React, {useState} from "react";
import styled from "styled-components";
import {Link, Route, useHistory} from "react-router-dom";
import Dialog from "./Dialog";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";
import {useUserDispatch, useUserState} from "../Context/UserContext";
import {UsernameProvider} from "../Context/CheckUsernameContext";

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
  flex-flow: column;
  justify-content: center;
`

const StyledLink = styled(Link)`
  padding: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 14px;
  flex-wrap: nowrap;
  text-decoration: none;
  text-transform: none;
  color: black;

`

const StyledButton = styled.button`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  border: none;
  background-color: whitesmoke;
  border-radius: 5px;
  text-decoration: none;
  text-transform: none;
  color: black;
  cursor: pointer;
`

function AuthContainer() {
    // const [isPut, setIsPut] = useState(false);
    const [mode, setMode] = useState({
        mode: 'login'
    })

    const {username} = useUserState();
    const dispatch = useUserDispatch();

    const onLogOut = (e) => {
        e.preventDefault();
        alert("로그아웃이 되었습니다.");
        dispatch({
            type: 'LOG_OUT'
        });
    }

    const onOpenDialog = (e) => {
        e.preventDefault();
        dispatch({
            type: 'VISIBLE_DIALOG'
        })
    }

    const onCloseDialog = (e) => {
        e.preventDefault();
        dispatch({
            type: 'HIDDEN_DIALOG'
        })
        setMode({
            mode: 'login'
        })
    }

    return (
        <StyledDiv>
            <StyledInnerDiv>
                {username ? (
                        <>
                            <StyledLink to={`/${username}`}>{username}</StyledLink>
                            <StyledButton onClick={onLogOut} type={"submit"}>
                                로그아웃
                            </StyledButton>
                        </>
                    ) :
                    <StyledLink onClick={onOpenDialog} to={"/auth/login"}>
                        Sign In
                    </StyledLink>
                }
                <Dialog close={onCloseDialog}
                        setMode={setMode}
                >
                    {/*여기가 children 자리 */}
                    {(() => {
                        if (mode.mode === 'login')
                            return (
                                <AuthLogin
                                    setMode={setMode}
                                />
                            )
                        else if (mode.mode === 'register')
                            return (
                                <UsernameProvider>
                                    <AuthRegister
                                        setMode={setMode}
                                    />
                                </UsernameProvider>
                            )
                    })()}
                </Dialog>
            </StyledInnerDiv>
        </StyledDiv>
    )
        ;
}

export default AuthContainer;