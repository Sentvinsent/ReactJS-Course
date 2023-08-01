import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = value => value.trim() === '';
const isEmail = value => value.includes('@');
const isPostal = value => value.trim().length === 5;

const Checkout = (props) => {

    const [formInputValidity, setFormInputValidity] = useState({
        firstName: true,
        lastName: true,
        email: true,
        city: true,
        postalCode: true,
        address: true
    })

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const cityInputRef = useRef();
    const postalCodeInputRef = useRef();
    const addressInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const firstNameInput = firstNameInputRef.current.value;
        const lastNameInput = lastNameInputRef.current.value;
        const emailInput = emailInputRef.current.value;
        const cityInput = cityInputRef.current.value;
        const postalCodeInput = postalCodeInputRef.current.value;
        const addressInput = addressInputRef.current.value;

        const enteredFirstNameIsValid = !isEmpty(firstNameInput);
        const enterLastNameIsValid = !isEmpty(lastNameInput);
        const enteredEmailIsValid = isEmail(emailInput)
        const enteredCityIsValid = !isEmpty(cityInput);
        const enteredPostalIsValid = isPostal(postalCodeInput)
        const entereAddressIsValid = !isEmpty(addressInput);

        setFormInputValidity({
            firstName: enteredFirstNameIsValid,
            lastName: enterLastNameIsValid,
            email: enteredEmailIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsValid,
            address: entereAddressIsValid
        })

        const checkoutFormIsValid =
            enteredFirstNameIsValid &&
            enterLastNameIsValid &&
            enteredEmailIsValid &&
            enteredCityIsValid &&
            enteredPostalIsValid &&
            entereAddressIsValid;

        if (!checkoutFormIsValid) {
            return
        }

        props.onSubmit({
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput,
            city: cityInput,
            postalCode: postalCodeInput,
            address: addressInput
        })
    }

    return <form onSubmit={confirmHandler} className={classes.form}>
        <div className={`${classes.control} ${formInputValidity.firstName ? '' : classes.invalid}`}>
            <label htmlFor='firstName'>First name: </label>
            <input type='text' id='firstName' ref={firstNameInputRef} />
            {!formInputValidity.firstName && <p>Please enter a valid first name</p>}
        </div>
        <div className={`${classes.control} ${formInputValidity.lastName ? '' : classes.invalid}`}>
            <label htmlFor='lastName'>Last name: </label>
            <input type='text' id='lastName' ref={lastNameInputRef} />
            {!formInputValidity.lastName && <p>Please enter a valid last name</p>}
        </div>
        <div className={`${classes.control} ${formInputValidity.email ? '' : classes.invalid}`}>
            <label htmlFor='email'>Email: </label>
            <input type='text' id='email' ref={emailInputRef} />
            {!formInputValidity.email && <p>Please enter a valid email</p>}
        </div>
        <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`}>
            <label htmlFor='city'>City: </label>
            <input type='text' id='city' ref={cityInputRef} />
            {!formInputValidity.city && <p>Please enter a valid city</p>}
        </div>
        <div className={`${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`}>
            <label htmlFor='postalCode'>Postal code: </label>
            <input type='text' id='postalCode' ref={postalCodeInputRef} />
            {!formInputValidity.postalCode && <p>Please enter a valid postal code</p>}
        </div>
        <div className={`${classes.control} ${formInputValidity.address ? '' : classes.invalid}`}>
            <label htmlFor='address'>Address: </label>
            <input type='text' id='address' ref={addressInputRef} />
            {!formInputValidity.address && <p>Please enter a valid address</p>}
        </div>
        <div className={classes.actions}>
            <button
                type='button'
                onClick={props.onCheckoutCancel}
            >Cancel</button>
            <button className={classes.submit}>Confirm</button>
        </div>
    </form>
}


export default Checkout