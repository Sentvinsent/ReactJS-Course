import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("");

  const filterChangeHandler = (filterData) => {
    setSelectedYear(filterData);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    if (selectedYear !== "") {
      return String(expense.date.getFullYear()) === selectedYear
    } else {
      return expense
    }
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedValue={selectedYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
