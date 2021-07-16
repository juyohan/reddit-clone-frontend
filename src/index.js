import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from "./Root";
import reportWebVitals from './reportWebVitals';
import {UserProvider} from "./Components/Context/UserContext";
import {PheedProvider} from "./Components/Context/PheedDataContext";

ReactDOM.render(
    <UserProvider>
        {/*<PheedProvider>*/}
            <React.StrictMode>
                <Root/>
            </React.StrictMode>,
        {/*</PheedProvider>,*/}
    </UserProvider>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
