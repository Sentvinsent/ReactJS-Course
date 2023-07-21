import useBasic from '../hooks/use-Basic';

const BasicForm = (props) => {

  const {
    value: firstName,
    isValid: firstNameValidity,
    hasError: firstNameError,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useBasic(value => value.trim() !== "")

  const {
    value: lastName,
    isValid: lastNameValidity,
    hasError: lastNameError,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useBasic(value => value.trim() !== "")

  const {
    value: emailValue,
    isValid: emailValidity,
    hasError: emailError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useBasic(value => value.includes('@'))

  let formValidity = false;

  if (firstNameValidity && lastNameValidity && emailValidity) {
    formValidity = true
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!formValidity) {
      return
    }

    firstNameReset();
    lastNameReset();
    emailReset();
  }

  const firstNameClasses = firstNameError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameError && <p className="error-text">First name must not be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameError && <p className="error-text">Last name must not be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue} />
        {emailError && <p className="error-text">Email is invalid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formValidity}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
