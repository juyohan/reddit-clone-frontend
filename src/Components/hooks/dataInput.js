import { useReducer, useCallback } from "react";

function reducer(state, action) {
    switch (action.type) {
        default :
            return state;
    }
}

function dataInput(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onClick = useCallback((e) => {

    }, []);
}

export default dataInput;