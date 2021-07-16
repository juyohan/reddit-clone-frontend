import React, {createContext, useContext, useReducer} from "react";

const initialPheedData = {
    pheeds: [],
    isLoading: true
}

function reducer(state, action) {
    switch (action.type) {
        case 'PHEED_GET_SUCCESS' :
            return {
                pheeds : [action.pheeds]
            }
        default :
            return {
                ...state
            }
    }
}

const PheedStateContext = createContext(null);
const PheedDispatchContext= createContext(null);

export const PheedProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialPheedData);

    return (
        <PheedStateContext.Provider value={state}>
            <PheedDispatchContext.Provider value={dispatch}>
                {children}
            </PheedDispatchContext.Provider>
        </PheedStateContext.Provider>
    )
}

export const PheedState = () => {
    const state = useContext(PheedStateContext);
    if (!state) {
        return new Error("error!");
    }
    return state;
}

export const PheedDispatch = () => {
    const dispatch = useContext(PheedDispatchContext);
    if (!dispatch) {
        return new Error("error!");
    }
    return dispatch;
}