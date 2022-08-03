import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/ExpensesList.css"

function ExpensesList({ filteredExpenses }) {
  if (filteredExpenses.length === 0) {
    return (
      <p className="expenses-list__fallback" style={{ color: "whitesmoke" }}>No expenses in the selected year!</p>
    );
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
