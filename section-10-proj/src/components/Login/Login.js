import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, actions) => {
  if (actions.type === "USER_EMAIL") {
    return {
      value: actions.val,
      isValid: actions.val.includes('@')
    }
  }
  if (actions.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@")
    }
  }
  return {
    value: "",
    isValid: false
  }
}
const passwordReducer = (state, actions) => {
  if (actions.type === "USER_PASS") {
    return {
      value: actions.val,
      isValid: actions.val.trim().length > 6
    }
  }
  if (actions.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    }
  }
  return {
    value: "",
    isValid: false
  }
}


const Login = (props) => {
  const ctx = useContext(AuthContext);
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: "", isValid: false },);
  const [passState, dispatchPass] = useReducer(passwordReducer, { value: "", isValid: false },);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: isEmailValid } = emailState;
  const { isValid: passIsValid } = passState;

  const emailRef = useRef();
  const passRef = useRef();

  useEffect(() => {

    const identifier = setTimeout(() => {
      console.log("Validity"
      )
      setFormIsValid(
        isEmailValid && passIsValid
      );
    }, 500);

    return () => { clearTimeout(identifier); }
  }, [isEmailValid, passIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_EMAIL", val: event.target.value })

    // setFormIsValid(emailState.isValid && passState.isValid)
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({ type: "USER_PASS", val: event.target.value })
    // setFormIsValid(emailState.isValid && passState.isValid)
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" })
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passState.value);
    } else if (!isEmailValid) {
      emailRef.current.focus();
    } else {
      passRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          isValid={isEmailValid}
          type="email"
          id="email"
          label="E-mail:"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input
          ref={passRef}
          isValid={passIsValid}
          type="password"
          id="password"
          label="Password:"
          value={passState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card >
  );
};

export default Login;
