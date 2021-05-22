import React, {useState} from 'react';
import styled, {css} from 'styled-components';

import AuthContent from "./AuthContent";
import InputWithLabel from "./InputWithLabel";
import RightRegister from "./RightRegister";
import axios from "axios";

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


function AuthLogin(props) {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = loginData;

    const onChange = (e) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    const onClick = () => {

    }


    return (
        <AuthContent title={"Login"}>
            <InputWithLabel label="이메일" name="email" value={email} onChange={onChange} placeholder="이메일" icon/>
            {email ?
                <TextDiv>
                    이메일을 입력해주세요.
                </TextDiv> :
                <TextDiv inputs>
                    이메일을 입력해주세요.
                </TextDiv>
            }
            <InputWithLabel label="비밀번호" name="password" value={password} onChange={onChange} placeholder="비밀번호"
                            type="password" icon/>
            {password ?
                <TextDiv>
                    비밀번호를 입력해주세요.
                </TextDiv> :
                <TextDiv inputs>
                    비밀번호를 입력해주세요.
                </TextDiv>
            }
            {/* 버튼을 누르면 해당 값을 백엔드로 */}
            <Wrapper type={"button"} data={loginData} onClick={onClick}>로그인</Wrapper>
            <RightRegister to={"/auth/register"} setMode={props.setMode} name={"register"}>회원가입</RightRegister>
        </AuthContent>
    );
}

export default AuthLogin;