import { FC } from "react";
import Todo from "../models/todo";
import classes from "./Todoitem.module.css";

const TodoComp: FC<{ item: Todo, onRemoveTodo: () => void }> = (props) => {

  return (
    <li key={props.item.id} className={classes.item} onClick={props.onRemoveTodo}>
      {props.item.text}
    </li>
  );
};

export default TodoComp;
