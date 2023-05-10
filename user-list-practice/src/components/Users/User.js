import styles from "./User.module.css"

const User = (props) => {
    return (
        <li>
            <div className={styles.user}>
                <p>{`${props.name} (${props.age} years old)`}</p>
            </div>
        </li>
    )
}

export default User