import Modal from 'react-modal';
import styles from "./ErrorModal.module.css";
import Button from '../UI/Button';
import ReactDOM from 'react-dom';

const ErrorModal = (props) => {

    return (<>
        {
            ReactDOM.createPortal(<Modal
                isOpen={props.openModal}
                contentLabel="Error Modal"
                className={styles.modal}
                overlayClassName={styles.overlay}
                ariaHideApp={false}
            >
                <div className={styles["modal__header"]}>
                    <h2>Invalid input</h2>
                </div>
                <div className={styles.modal__body}>
                    <p>{props.errorMessage}</p>
                </div>
                <div className={styles.modal__footer}>
                    <Button action={props.onModalClose}>Okay</Button>
                </div>
            </Modal>, document.getElementById('modal-root'))
        }
    </>
    )
}

export default ErrorModal