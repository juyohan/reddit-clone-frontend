import React, {useCallback, useEffect, useState} from 'react';
import AuthContent from "./AuthContent";
import InputWithLabel from "./InputWithLabel";
import RightRegister from "./RightRegister";
import axios from "axios";
import styled, {css} from "styled-components";
import {isEmail, isPw} from "../Helpers/EmailHelper";
import {useHistory} from "react-router-dom";
import useInput from "../hooks/useInput";
import {useUsernameDispatch, useUsernameState} from "../Context/CheckUsernameContext";

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

  ${props => props.disabled && css`
    cursor: not-allowed;
    filter: grayscale(1);
    background-color: skyblue;
    color: white;
    fill: white;
  `}
    //&:disabled {
    //  cursor: not-allowed;
    //  filter: grayscale(1);
    //  background-color: skyblue;
    //  color: white;
    //  fill: white;
    //}
  &:hover {
    background: lightskyblue;
  }

  &:active {
    background: deepskyblue;
  }
`;

const TextDiv = styled.div`
  height: 22px;
  visibility: hidden;
  opacity: 0;
  color: #ad0303bd;
  font-size: 12px;
  padding-left: 12px;
  transition: visibility 0.3s, opacity 0.3s linear;
  padding-top: 2px;
  padding-bottom: 2px;

  ${props => props.equals && css`
    visibility: visible;
    opacity: 1;
    color: #db0a0abd;
    font-size: 12px;
    padding-left: 12px;
    transition: visibility 0.3s, opacity 0.3s linear;
    padding-top: 2px;
    padding-bottom: 2px;
  `}
`

async function postRegister(email, username, pw) {
    const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
            email: email,
            username: username,
            password: pw
        },
        {
            headers: {
                "Content-Type": 'application/json'
            }
        }
    );
    return response.status;
}

function AuthRegister(props) {
    const [email, onChangeEmail, setEmail] = useInput("");
    const [username, onChangeUsername, setUsername] = useInput("");
    const [pw, onChangePw, setPw] = useInput("");
    const [pwConfirm, onChangePwConfirm, setPwConfirm] = useInput("");
    const [errorMessage, setErrorMessage] = useState({
        emailError: "",
        pwError: "",
        pwConfirmError: ""
    })

    const {enable, message} = useUsernameState();
    const dispatch = useUsernameDispatch();

    const {emailError, pwError, pwConfirmError} = errorMessage;

    const validateCheck = useCallback((input, regex) => {
        let isValidate = false;
        if (input === false) {
            isValidate = false
        } else if (regex === true) {
            isValidate = true
        } else {
            isValidate = false
        }
        return isValidate;
    }, [email, pw]);

    const onReset = useCallback(() => {
        setEmail("");
        setUsername("");
        setPw("");
        setPwConfirm("");
    }, [email, username, pw, pwConfirm]);

    useEffect(() => {
        if (validateCheck(email, isEmail(email)) || email === "") {
            setErrorMessage({
                ...errorMessage,
                emailError: ""
            });
        } else {
            setErrorMessage({
                ...errorMessage,
                emailError: "????????? ???????????? ?????????????????????."
            });
        }
    }, [email])

    useEffect(() => {
        dispatch({
            type: 'RESET_USERNAME'
        });
    }, [username])

    useEffect(() => {
        if (validateCheck(pw, isPw(pw)) || pw === "") {
            setErrorMessage({
                ...errorMessage,
                pwError: ""
            })
        } else {
            setErrorMessage({
                ...errorMessage,
                pwError: "??????????????? ?????? ????????? ?????? ??? ????????? 8??? ??????????????? ?????????."
            })
        }
    }, [pw])

    useEffect(() => {
        if (pw === pwConfirm || pwConfirm === "") {
            setErrorMessage({
                ...errorMessage,
                pwConfirmError: ""
            })
        } else {
            setErrorMessage({
                ...errorMessage,
                pwConfirmError: "??????????????? ???????????? ????????????."
            })
        }
    }, [pwConfirm])

    const onSignUp = () => {
        if (!email || !pw || !username || !pwConfirm) {
            alert("?????? ?????? ??????????????????.");
            return;
        }

        if (emailError) {
            alert("????????? ????????? ???????????????.");
            return;
        } else if (pwError) {
            alert("???????????? ????????? ???????????????.");
            return;
        } else if (pwConfirmError) {
            alert("??????????????? ???????????? ????????????.");
            return;
        } else if (!enable) {
            alert("???????????? ??????????????????.");
            return;
        }

        postRegister(email, username, pw).then(resolve => {
            console.log("resolve : ", resolve);
            if (resolve === 201) {
                alert("???????????? ??????????????????.");
                props.setMode({
                    mode: "login"
                })
                onReset();
            } else {
                alert("?????? ???????????? ??????????????????.");
            }
        })
    }

    const history = useHistory();

    return (
        <AuthContent title={"Register"}>
            <InputWithLabel label="?????????" value={email} onChange={onChangeEmail} placeholder="?????????"/>
            {emailError ? <TextDiv equals>
                {emailError}
            </TextDiv> : <TextDiv equals>
                {emailError}
            </TextDiv>
            }
            <InputWithLabel label="?????????"
                            name="username"
                            value={username}
                            check={username}
                            onChange={onChangeUsername}
                            placeholder="?????????"
                // setAble={setAble}
            />
            {message ? <TextDiv equals>
                {message}
            </TextDiv> : <TextDiv>
                {message}
            </TextDiv>
            }

            <InputWithLabel label="????????????" value={pw} onChange={onChangePw} placeholder="????????????"
                            type="password"/>
            {pwError ? <TextDiv equals>
                {pwError}
            </TextDiv> : <TextDiv>
                {pwError}
            </TextDiv>}
            <InputWithLabel label="???????????? ??????" value={pwConfirm} onChange={onChangePwConfirm}
                            placeholder="???????????? ??????" type="password"/>
            {pwConfirmError ? <TextDiv equals>
                {pwConfirmError}
            </TextDiv> : <TextDiv>
                {pwConfirmError}
            </TextDiv>}
            {/* ????????? ????????? ?????? ?????? ???????????? */}
            <Wrapper
                type={"button"}
                // role={"button"}
                onClick={onSignUp}
                disabled={!enable}
            >????????????</Wrapper>
            <RightRegister to={"/auth/login"}
                           setMode={props.setMode}
                           name={"login"}>?????????</RightRegister>

        </AuthContent>
    );
}

export default AuthRegister;