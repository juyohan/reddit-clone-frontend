import React, {useMemo, useState} from 'react';
import AuthContent from "./AuthContent";
import InputWithLabel from "./InputWithLabel";
import RightRegister from "./RightRegister";
import axios from "axios";
import styled, {css} from "styled-components";
import {isEmail} from "../Helpers/EmailHelper";

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

function AuthRegister(props) {
    const [registerData, setRegisterData] = useState({
        email: '',
        username: '',
        password: '',
        passwordConfirm: ''
    });

    const {email, username, password, passwordConfirm} = registerData;

    const onChange = (e) => {
        const {name, value} = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    }

    const onClick = (e) => {
        e.preventDefault();
        axios.post(
            "http://localhost:8080/api/auth/signup",
            registerData
            ,
            {
                headers: {
                    "Content-Type": 'application/json'
                }
            })
            .then(r => {
                console.log(r);
            });
    }

    return (
        <AuthContent title={"Register"}>
            <InputWithLabel label="이메일" name="email" value={email} onChange={onChange} placeholder="이메일"/>
            {isEmail(email) ?
                <TextDiv>
                    이메일 형식이 잘못되었습니다.
                </TextDiv> :
                !email ?
                    <TextDiv equals>
                        이메일을 입력해주세요.
                    </TextDiv> :
                    <TextDiv equals>
                        이메일 형식이 잘못되었습니다.
                    </TextDiv>
            }
            <InputWithLabel label="아이디" name="username" value={username} check={registerData.username} onChange={onChange} placeholder="아이디"/>
            {/*사용 할 수 있는 아이디이다 아니다를 알려주기*/}
            <InputWithLabel label="비밀번호" name="password" value={password} onChange={onChange} placeholder="비밀번호"
                            type="password"/>
            <InputWithLabel label="비밀번호 확인" name="passwordConfirm" value={passwordConfirm} onChange={onChange}
                            placeholder="비밀번호 확인" type="password"/>
            {password === passwordConfirm ?
                <TextDiv>
                    비밀번호가 다릅니다.
                </TextDiv>
                : <TextDiv equals>
                    비밀번호가 다릅니다.
                </TextDiv>
            }
            {/* 버튼을 누르면 해당 값을 백엔드로 */}
            <Wrapper type={"button"} onClick={onClick}>회원가입</Wrapper>
            <RightRegister to={"/auth/login"} setMode={props.setMode} name={"login"}>로그인</RightRegister>
        </AuthContent>
    );
}

export default AuthRegister;