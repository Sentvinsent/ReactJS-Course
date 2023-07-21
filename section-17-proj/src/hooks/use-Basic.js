import { useState } from "react";

const useBasic = (validate) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validate(value);
    const hasError = !isValid && isTouched;

    const onChangeHandler = event => {
        setValue(event.target.value);
    }

    const onBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setValue('');
        setIsTouched(false);
    }

    return {
        value,
        isValid,
        hasError,
        onChangeHandler,
        onBlurHandler,
        reset
    }
}

export default useBasic