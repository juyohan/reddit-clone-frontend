import React, {createContext, useContext, useReducer} from 'react';

const initialUsername = {
    username : null,
    visible : false,
}

function reducer(state, action) {
    switch (action.type) {
        case 'LOG_IN' :
            return {
                username : action.username,
                visible : false
            }
        case 'LOG_OUT' :
            return {
                username : null,
                visible : false
            }
        case 'VISIBLE_DIALOG' :
            return {
                ...state,
                visible : true
            }
        case 'HIDDEN_DIALOG' :
            return {
                ...state,
                visible : false
            }
        default :
            return state;
    }
}

const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialUsername);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}

export const useUserState = () => {
    const state = useContext(UserStateContext);
    if (!state) {
        throw new Error("Cannot find UserProvider!");
    }
    return state;
}

export const useUserDispatch = () => {
    const dispatch = useContext(UserDispatchContext);
    if (!dispatch) {
        throw new Error("Cannot find UserProvider!");
    }
    return dispatch;
}