import React, {useContext, useRef} from 'react';
import {useUserState} from "../Context/UserContext";
import {useHistory} from "react-router-dom";

function Router() {
    const {username} = useUserState();
    const history = useHistory();
    const location = useRef();

    if (!username) {

    }
    return (
        <></>
    );
}

export default Router;