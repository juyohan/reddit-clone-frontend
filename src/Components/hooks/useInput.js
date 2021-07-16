import {useCallback, useState} from "react";

function useInput(initialForm) {
    const [value, setValue] = useState(initialForm);

    const handler = useCallback((e) => {
        const blank = /\s/;
        if (blank.test(e.target.value) === true) {
            alert("공백은 사용할 수 없습니다.");
            return ;
        }
        setValue(e.target.value)
    },[]);

    return [value, handler, setValue];
}

export default useInput;