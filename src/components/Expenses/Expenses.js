import "../css/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const saveYearHandler = (enteredYear) => {
    setSelectedYear(enteredYear);
  };

  const filteredExpenses = Object.values(props.expenses).filter(
    // eslint-disable-next-line
    (expense) => expense.date.getFullYear() == selectedYear
  );
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={selectedYear} onSaveYear={saveYearHandler} />
        <ExpensesList filteredExpenses = {filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
