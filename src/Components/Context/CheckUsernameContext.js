import React, {createContext, useContext, useReducer} from "react";

const initialUsername = {
    enable : false,
    message : ""
}

function reducer(state, action) {
    switch (action.type) {
        case 'ENABLE_USERNAME' :
            return {
                enable : true,
                message : "사용 가능한 아이디입니다."
            }
        case 'DISABLE_USERNAME' :
            return {
                enable : false,
                message: "이미 사용중인 아이디입니다."
            }
        case 'InValidate_USERNAME' :
            return {
                ...state,
                message : "한글, 영어, 숫자를 조합해 2~10자로 입력해주세요."
            }
        case 'RESET_USERNAME' :
            return {
                enable : false,
                message : ""
            }
        default :
            return state;
    }
}

const UsernameStateContext = createContext(null);
const UsernameDispatchContext= createContext(null);

export const UsernameProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialUsername);

    return (
        <UsernameStateContext.Provider value={state}>
            <UsernameDispatchContext.Provider value={dispatch}>
                {children}
            </UsernameDispatchContext.Provider>
        </UsernameStateContext.Provider>
    )
}

export const useUsernameState = () => {
    const state = useContext(UsernameStateContext);
    if (!state) {
        return new Error("error!");
    }
    return state;
}

export const useUsernameDispatch = () => {
    const dispatch = useContext(UsernameDispatchContext);
    if (!dispatch) {
        return new Error("error!");
    }
    return dispatch;
}