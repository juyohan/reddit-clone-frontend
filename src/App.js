import './App.css';
import React from 'react';

import LayoutDiv from "./Components/Layout/LayoutDiv";
import MenuLayout from "./Components/Layout/MenuLayout";
import DefaultHeader from "./Components/DefaultValue/DefaultHeader";
import BottomLayout from "./Components/Layout/BottomLayout";
import {Route, Switch, Redirect} from "react-router-dom";
import PostLayout from "./Components/PostPage/PostLayout";
import {useUserState} from "./Components/Context/UserContext";
import Profile from "./Components/UserProfile/Profile";

function App() {
    const {username} = useUserState();

    // console.log(document.documentElement.scrollHeight); // 페이지의 전체 높이
    // console.log(document.documentElement.clientHeight); // 사용자가 보고있는 페이지의 높이
    // console.log(document.documentElement.scrollTop); // == window.scrollY
    //
    // // console.log(document.documentElement.clientTop); // 해당 값은 없음
    // console.log(document.body.scrollHeight); // 해당 페이지 전체 높이
    // console.log(document.body.clientHeight); // 해당 페이지의 높이

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
                    {/*<Route path={"/hot"} component={BottomLayout}/>*/}
                    {/*<Route path={"/feed"} component={BottomLayout}/>*/}
                    <Route path={"/"} component={BottomLayout}/>
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
