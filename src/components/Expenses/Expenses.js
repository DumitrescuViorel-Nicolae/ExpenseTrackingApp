import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  
  const saveYearHandler = (enteredYear) => {
    setSelectedYear(enteredYear);
  };

  // const filteredExpenses = Object.values(props.expenses).filter((expense) => 
  //   expense.date == selectedYear
  // );
  const filteredExpenses = Object.values(props.expenses).filter((expense) => (expense.date.getFullYear() == selectedYear));

  console.log(filteredExpenses)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={selectedYear} onSaveYear={saveYearHandler} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card> 
    </div>
  );
}
export default Expenses;
