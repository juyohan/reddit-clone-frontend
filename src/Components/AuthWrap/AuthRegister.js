import React from 'react';
import AuthContent from "./AuthContent";
import InputWithLabel from "./InputWithLabel";
import AuthButton from "./AuthButton";
import RightRegister from "./RightRegister";

function AuthRegister() {
    return(
        <AuthContent title={"Register"}>
            {/* 입력할 때 미리 있는지 확인하는 기능 */}
            <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
            <InputWithLabel label="아이디" name="username" placeholder="아이디"/>
            <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
            <InputWithLabel label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password"/>
            {/* 버튼을 누르면 해당 값을 백엔드로 */}
            <AuthButton>회원가입</AuthButton>
            <RightRegister to="/auth/login">로그인</RightRegister>
        </AuthContent>
    );
}

export default AuthRegister;