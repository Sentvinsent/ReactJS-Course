import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  const cancelExpenseDataHandler = () => {
    setIsEditing(false)
  }

  const addExpenseHandler = () => {
    setIsEditing(true)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button
        onClick={addExpenseHandler}
      >Add expense</button>}
      {isEditing && <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelExpense={cancelExpenseDataHandler}
      />}
    </div>
  );
};

export default NewExpense;
