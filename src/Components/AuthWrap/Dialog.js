import React from 'react';
import styled from "styled-components";
import {useUserState} from "../Context/UserContext";

const DarkBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0, 0.8);
  z-index: 100;
`;

const LogoHeader = styled.div`
  height: 5rem;
  background-color: lightblue;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.span`
  color: white;
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-decoration: none;
`;

const DialogBlock = styled.div`
  width: 500px;
  background: white;
  border-radius: 2px;
  position: absolute;
`;

const Contents = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;

const CloseIcon = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  cursor: pointer;
  right: 0;
`;

function Dialog({children, close}) {

    const {visible} = useUserState();

    return (
        <>
            {visible ?
                <DarkBackGround>
                    <DialogBlock
                    //     onClick={function (e) {
                    //     // 이게 이벤트 버블링을 제거해준다.
                    //     e.stopPropagation();
                    //
                    // }}
                    >
                        <CloseIcon onClick={close}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d={"M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"}/>
                            </svg>
                        </CloseIcon>
                        <LogoHeader>
                            <Logo>
                                BookRD
                            </Logo>
                        </LogoHeader>
                        <Contents>
                            {children}
                        </Contents>
                    </DialogBlock>
                </DarkBackGround> : null}
        </>
    );
}

export default Dialog;