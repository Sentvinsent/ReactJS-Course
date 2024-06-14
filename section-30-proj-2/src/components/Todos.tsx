import { FC } from "react";
import TodoComp from "./TodoItem";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos: FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoComp
          item={item}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
