import { useRef } from "react";
import classes from "./NewTodo.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submithandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText!.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submithandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
