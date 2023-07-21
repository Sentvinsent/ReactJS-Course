import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const emailInptClasses = emailHasError ? 'form-control invalid' : 'form-control';
  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return
    }

    resetNameInput();
    resetEmailInput();
  }


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName} />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInptClasses}>
        <label htmlFor='email'>Your email</label>
        <input
          type='text'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail} />
        {emailHasError && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
