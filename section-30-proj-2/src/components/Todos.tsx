import { FC } from "react";
import Todo from "../models/todo";
import TodoComp from "./TodoItem";

const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoComp item={item} />
      ))}
    </ul>
  );
};

export default Todos;
