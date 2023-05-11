import styles from "./UserForm.module.css";
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from "react";
import ErrorModal from "./ErrorModal";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

const UserForm = (props) => {
    const nameInpRef = useRef();
    const ageInpRef = useRef();
    const [openModal, setOpenModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const openModalHandler = () => {
        setOpenModal(true)
    }
    const closeModalHandler = () => {
        setOpenModal(false)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInpRef.current.value;
        const enteredAge = ageInpRef.current.value;

        if (enteredName.trim().length > 0 && Number(enteredAge) > 0) {
            const userData = {
                id: uuidv4(),
                name: enteredName,
                age: enteredAge
            }

            props.onAddUser(userData);
            nameInpRef.current.value = '';
            ageInpRef.current.value = '';

        } else {
            if (enteredName.trim().length < 1 && Number(enteredAge) < 1) {
                setErrorMessage("Please enter a valid name and age (non-empty values).")
                openModalHandler();

            } else if (enteredName.trim().length < 1) {
                setErrorMessage("Please enter a valid name (non-empty).")
                openModalHandler();
            } else {
                setErrorMessage("Please enter a valid age (> 0).")
                openModalHandler();
            }
        }

    }
    return (
        <Wrapper>
            <form onSubmit={submitHandler}>
                <div className={styles["new-users__controls"]}>
                    <div className={styles["new-user__control"]}>
                        <label htmlFor="name-inp">Name</label>
                        <input
                            id="name-inp"
                            type="text"
                            ref={nameInpRef}
                        />
                    </div>
                    <div className={styles['new-user__control']}>
                        <label htmlFor="num-inp">Age</label>
                        <input
                            id="num-inp"
                            type="number"
                            step="1"
                            ref={ageInpRef}
                        />
                    </div>
                </div>
                <div className={styles["new-user__actions"]}>
                    <Button type="submit">Add user</Button>
                </div>
            </form>
            <ErrorModal openModal={openModal} onModalClose={closeModalHandler} errorMessage={errorMessage} />
        </Wrapper>
    )
}

export default UserForm