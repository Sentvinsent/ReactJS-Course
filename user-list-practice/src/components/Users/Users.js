import User from "./User";
import Card from "../UI/Card";
import styles from "./Users.module.css";

const Users = (props) => {
  if (props.userData.length === 0) {
    return <h2>Currently, there are no users!</h2>
  }

  return (
    <Card className={styles.users}>
      <ul className={styles["users__list"]}>
        {props.userData.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default Users;
