import styles from './NewUser.module.css';
import UserForm from './UserForm';
import Card from '../UI/Card';

const NewUser = (props) => {
    return (
        <Card className={styles["new-user"]}>
            <UserForm onAddUser={props.onNewUser} />
        </Card>
    )
}

export default NewUser