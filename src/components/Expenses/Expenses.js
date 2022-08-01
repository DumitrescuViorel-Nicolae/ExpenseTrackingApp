import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import {useState} from 'react'

function Expenses(props) {

  const [selectedYear, setSelectedYear] = useState('2020')

  const saveYearHandler = enteredYear => {
    setSelectedYear(enteredYear);
  }

  return (
    <div>
       <Card className="expenses">
       <ExpensesFilter year = {selectedYear} onSaveYear = {saveYearHandler} />
       {props.expenses.map(expense => <ExpenseItem title={expense.title} amount = {expense.amount} date = {expense.date}/>)}
    </Card>
    </div>
  );
}
export default Expenses;
