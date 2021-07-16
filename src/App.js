import './App.css';
import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import DefaultDiv from "./Components/DefaultValue/DefaultDiv";
import LayoutDiv from "./Components/Layout/LayoutDiv";
import MenuLayout from "./Components/Layout/MenuLayout";
import DefaultHeader from "./Components/DefaultValue/DefaultHeader";
import BottomLayout from "./Components/Layout/BottomLayout";
import {Route, Switch, Redirect} from "react-router-dom";
import PostLayout from "./Components/PostPage/PostLayout";
import {useUserState} from "./Components/Context/UserContext";
import Profile from "./Components/UserProfile/Profile";
import {FeedAPI, JwtAPI} from "./Components/axios";
import FeedContainer from "./Components/MainFeed/FeedContainer";
import moment from "moment";

function App() {
    const {username} = useUserState();

    // useEffect(() => {
    //     JwtAPI.checkJwt().then()
    // },[]);


    // console.log(new Date().toLocaleString());
    // const date = moment().format("YYYY-MM-DD HH:mm:ss");
    // console.log(date.toString());

    return (
        <LayoutDiv width>
            <DefaultHeader>
                <MenuLayout/>
            </DefaultHeader>

            {username ? (
                <Switch>
                    <Route path={"/post"} component={PostLayout}/>
                    <Route path={"/:username"} component={Profile}/>
                    <Route path={"/"} exact={true} component={BottomLayout}/>
                    <Redirect from={"*"} to={"/404"}/>
                </Switch>
            ) : (
                <Switch>
                    <Route path={"/feed"} component={BottomLayout}/>
                    <Route path={"/"} exact={true} component={BottomLayout}/>
                    {/*<Route path={"/api/data/post/:username"} component={PostLayout}/>*/}
                    {/*<Route path={"/"} component={BottomLayout}/>*/}
                    <Redirect from={"*"} to={"/404"}/>
                </Switch>
            )
            }
        < /LayoutDiv>
    );
}

export default App;
