import styles from "./Button.module.css";

const Button = (props) => {
    return <button onClick={props.action} className={styles.button} type={props.type}>{props.children}</button>
}

export default Button