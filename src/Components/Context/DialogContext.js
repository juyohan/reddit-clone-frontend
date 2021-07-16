import {createContext, useContext, useReducer} from "react";

const initialDialog = {
    visible : false
}

function reducer(state, action) {
    switch (action.type) {
        case 'VISIBLE_DIALOG' :
            return {
                visible : true
            }
        case 'HIDDEN_DIALOG' :
            return {
                visible : false
            }
        default :
            return state;
    }
}

const DialogStateContext = createContext(null);
const DialogDispatchContext = createContext(null);

export const DialogProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialDialog);

    return (
        <DialogStateContext.Provider value={state}>
            <DialogDispatchContext.Provider value={dispatch}>
                {children}
            </DialogDispatchContext.Provider>
        </DialogStateContext.Provider>
    )

}

export const useDialogState = () => {
    const state = useContext(DialogStateContext);
    if (!state) {
        return new Error("dialog error!");
    }
    return state;
}

export const useDialogDispatch = () => {
    const dispatch = useContext(DialogDispatchContext);
    if (!dispatch) {
        return new Error("dialog error!");
    }
    return dispatch;
}