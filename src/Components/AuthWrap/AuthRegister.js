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
                emailError: "이메일 형식으로 작성해야합니다."
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
                pwError: "비밀번호는 최소 하나의 문자 및 숫자로 8자 이상이어야 합니다."
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
                pwConfirmError: "비밀번호가 일치하지 않습니다."
            })
        }
    }, [pwConfirm])

    const onSignUp = () => {
        if (!email || !pw || !username || !pwConfirm) {
            alert("모든 값을 입력해주세요.");
            return;
        }

        if (emailError) {
            alert("이메일 형식이 틀렸습니다.");
            return;
        } else if (pwError) {
            alert("비밀번호 형식이 틀렸습니다.");
            return;
        } else if (pwConfirmError) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        } else if (!enable) {
            alert("아이디를 변경해주세요.");
            return;
        }

        postRegister(email, username, pw).then(resolve => {
            console.log("resolve : ", resolve);
            if (resolve === 201) {
                alert("회원가입 완료했습니다.");
                props.setMode({
                    mode: "login"
                })
                onReset();
            } else {
                alert("이미 존재하는 이메일입니다.");
            }
        })
    }

    const history = useHistory();

    return (
        <AuthContent title={"Register"}>
            <InputWithLabel label="이메일" value={email} onChange={onChangeEmail} placeholder="이메일"/>
            {emailError ? <TextDiv equals>
                {emailError}
            </TextDiv> : <TextDiv equals>
                {emailError}
            </TextDiv>
            }
            <InputWithLabel label="아이디"
                            name="username"
                            value={username}
                            check={username}
                            onChange={onChangeUsername}
                            placeholder="아이디"
                // setAble={setAble}
            />
            {message ? <TextDiv equals>
                {message}
            </TextDiv> : <TextDiv>
                {message}
            </TextDiv>
            }

            <InputWithLabel label="비밀번호" value={pw} onChange={onChangePw} placeholder="비밀번호"
                            type="password"/>
            {pwError ? <TextDiv equals>
                {pwError}
            </TextDiv> : <TextDiv>
                {pwError}
            </TextDiv>}
            <InputWithLabel label="비밀번호 확인" value={pwConfirm} onChange={onChangePwConfirm}
                            placeholder="비밀번호 확인" type="password"/>
            {pwConfirmError ? <TextDiv equals>
                {pwConfirmError}
            </TextDiv> : <TextDiv>
                {pwConfirmError}
            </TextDiv>}
            {/* 버튼을 누르면 해당 값을 백엔드로 */}
            <Wrapper
                type={"button"}
                // role={"button"}
                onClick={onSignUp}
                disabled={!enable}
            >회원가입</Wrapper>
            <RightRegister to={"/auth/login"}
                           setMode={props.setMode}
                           name={"login"}>로그인</RightRegister>

        </AuthContent>
    );
}

export default AuthRegister;