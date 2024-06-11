import { FC } from "react";
import Todo from "../models/todo";

const TodoComp: FC<{ item: Todo }> = (props) => {
  return <li key={props.item.id}>{props.item.text}</li>;
};

export default TodoComp;
