import {useReducer, useCallback} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INPUT_DATA' :
            return {
                ...state,
                [action.name]: action.value
            }
        case 'RESET_DATA' :
            return Object.keys(state).reduce((acc, cur) => {
                acc[cur] = '';
                return acc;
            })
        case 'POST_DATA' :
            return {

            }
        default :
            return state;
    }
}

function useInput(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback((e) => {
        const {name, value} = e.target;

        dispatch({
            type: 'INPUT_DATA',
            name,
            value
        });
    }, []);

    const onReset = useCallback(() => {
        dispatch({
            type: 'RESET_DATA'
        })
    }, []);

    const onClick = useCallback(() => {
        dispatch({
            type: 'POST_DATA'
        })
    }, []);

    return [state, onChange, onReset];
}

export default useInput;