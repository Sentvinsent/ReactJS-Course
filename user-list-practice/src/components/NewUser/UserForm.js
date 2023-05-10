import styles from "./UserForm.module.css";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import ErrorModal from "./ErrorModal";
import Button from "../UI/Button";

const UserForm = (props) => {
    const [enteredName, setName] = useState('');
    const [enteredAge, setAge] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }
    const openModalHandler = () => {
        setOpenModal(true)
    }
    const closeModalHandler = () => {
        setOpenModal(false)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim().length > 0 && Number(enteredAge) > 0) {
            const userData = {
                id: uuidv4(),
                name: enteredName,
                age: enteredAge
            }

            props.onAddUser(userData);

            setName("");
            setAge("");
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
        <div>
            <form onSubmit={submitHandler}>
                <div className={styles["new-users__controls"]}>
                    <div className={styles["new-user__control"]}>
                        <label>Name</label>
                        <input
                            type="text"
                            value={enteredName}
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div className={styles['new-user__control']}>
                        <label>Age</label>
                        <input
                            type="number"
                            step="1"
                            value={enteredAge}
                            onChange={ageChangeHandler}
                        />
                    </div>
                </div>
                <div className={styles["new-user__actions"]}>
                    <Button type="submit">Add user</Button>
                </div>
            </form>
            <ErrorModal openModal={openModal} onModalClose={closeModalHandler} errorMessage={errorMessage} />
        </div>
    )
}

export default UserForm