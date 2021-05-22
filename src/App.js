import './App.css';
import React, {useState} from 'react';
import styled from "styled-components";

import DefaultDiv from "./Components/DefaultValue/DefaultDiv";
import LayoutDiv from "./Components/Layout/LayoutDiv";
import MenuLayout from "./Components/Layout/MenuLayout";
import DefaultHeader from "./Components/DefaultValue/DefaultHeader";
import BottomLayout from "./Components/Layout/BottomLayout";
import {Route} from "react-router-dom";
import PostLayout from "./Components/PostPage/PostLayout";

function App() {
    return (
        <>
            <LayoutDiv width>
                {/*여기가 상단(배너) 입니다. */}
                <DefaultHeader>
                    {/* 배너의 안쪽 박스입니다. */}
                    <MenuLayout>
                    </MenuLayout>
                </DefaultHeader>
                {/* 여기가 하단 입니다. */}

                <Route path={"/"} exact={true} component={BottomLayout}/>
                <Route path={"/api/data/post"} component={PostLayout}/>

            </LayoutDiv>
        </>
    );
}

export default App;
