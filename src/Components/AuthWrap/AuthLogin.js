import React, {useCallback, useState, useEffect} from 'react';
import styled, {css} from 'styled-components';

import AuthContent from "./AuthContent";
import InputWithLabel from "./InputWithLabel";
import RightRegister from "./RightRegister";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useUserDispatch} from "../Context/UserContext";
import useInput from "../hooks/useInput";

const Wrapper = styled.div`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: dodgerblue;
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;
  transition: .2s all;

  &:hover {
    background: lightskyblue;
  }

  &:active {
    background: deepskyblue;
  }
`;

const TextDiv = styled.div`
  visibility: hidden;
  opacity: 0;
  color: #ad0303bd;
  font-size: 12px;
  padding-left: 12px;
  transition: visibility 0.3s, opacity 0.3s linear;
  padding-top: 3px;

  ${props => props.inputs && css`
    visibility: visible;
    opacity: 1;
    color: #db0a0abd;
    font-size: 12px;
    padding-left: 12px;
    transition: visibility 0.3s, opacity 0.3s linear;
    padding-top: 3px;
  `}
`

async function postUsers(email, pw) {
    const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
            email: email,
            password: pw
        },
        {
            headers: {
                "Content-Type": 'application/json'
            }
        }
    )
    return response;
}

function AuthLogin(props) {
    const [email, onChangeEmail, setEmail] = useInput("");
    const [pw, onChangePw, setPw] = useInput("");
    const dispatch = useUserDispatch();
    const [errorMessage, setErrorMessage] = useState({
        emailError : "",
        pwError : ""
    })

    const {emailError, pwError} = errorMessage;

    const onReset = useCallback(() => {
        setEmail("");
        setPw("");
    }, [setEmail, setPw]);

    const onLogin = (e) => {
        e.preventDefault();
        if (!email || !pw) {
            alert("?????? ?????? ????????? ??????????????????.");
            return;
        }

        postUsers(email, pw).then(res => {
            const { jwtToken, username } = res.data;
            // axios.defaults.headers['Authorization'] = `Bearer ${jwtToken}`;
            dispatch({
                type: 'LOG_IN',
                username : username
            });
            localStorage.setItem("Access_Token", jwtToken);
            alert("?????????!");
            history.push("/");
            onReset();
        });
    }

    const history = useHistory();

    // useEffect(() => {
    //
    // }, [pw]);
    //
    // useEffect(() => {
    //     if (email === "") {
    //         setErrorMessage({
    //             ...errorMessage,
    //             emailError: ""
    //         })
    //     }
    //     else {
    //         setErrorMessage({
    //             ...errorMessage,
    //             emailError: "???????????? ??????????????????."
    //         })
    //     }
    // },[email])
    

    return (
        <AuthContent title={"Login"}>
            <InputWithLabel label="?????????"
                            name={"email"}
                            value={email}
                            onChange={onChangeEmail}
                            placeholder="?????????"
                            icon/>
            {emailError ?
                <TextDiv inputs>
                    {emailError}
                </TextDiv> :
                <TextDiv inputs>
                    {emailError}
                </TextDiv>
            }
            <InputWithLabel label="????????????" value={pw} name={"pw"} onChange={onChangePw} placeholder="????????????"
                            type="password" icon/>
            {pwError ?
                <TextDiv inputs>
                    {pwError}
                </TextDiv> :
                <TextDiv inputs>
                    {pwError}
                </TextDiv>
            }
            {/* ????????? ????????? ?????? ?????? ???????????? */}
            <Wrapper type={"button"}
                // data={loginData}
                     onClick={onLogin}>
                ?????????
            </Wrapper>
            <RightRegister to={"/auth/register"}
                           setMode={props.setMode}
                           name={"register"}>????????????</RightRegister>
        </AuthContent>
    );
}

export default AuthLogin;