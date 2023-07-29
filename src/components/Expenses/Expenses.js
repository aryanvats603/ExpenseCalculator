import React, { useState } from "react";

import "./expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpenses);

  return (
    <div>
      
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses}></ExpensesList>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
     
      <Card className="expenses">
      
      </Card>
    </div>
  );
}
export default Expenses;
