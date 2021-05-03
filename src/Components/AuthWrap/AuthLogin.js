import React from 'react';
import styled from 'styled-components';

import AuthContent from "./AuthContent";
import InputWithLabel from "./InputWithLabel";
import AuthButton from "./AuthButton";
import RightRegister from "./RightRegister";


function AuthLogin() {
    return (
        <AuthContent title={"Login"}>
            <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
            <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
            {/* 버튼을 누르면 해당 값을 백엔드로 */}
            <AuthButton>로그인</AuthButton>
            <RightRegister to={"/auth/register"}>회원가입</RightRegister>
        </AuthContent>
    );
}

export default AuthLogin;