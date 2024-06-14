import Todo from "../models/todo";
import { FC, createContext, useState } from "react";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: FC = (props) => {
  const [todoses, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: string) => {
    const newTodo = new Todo(todo);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.id !== id);
    });
  };
  const contextValue: TodosContextObj = {
    items: todoses,
    addTodo: addTodoHandler,
    removeTodo,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
