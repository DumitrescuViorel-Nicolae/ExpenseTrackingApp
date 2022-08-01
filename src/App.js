import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expenses/NewExpense";
import { useState } from "react";


const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(),
  }
];

function App() {

  const[expenses, setExpense] = useState(DUMMY_DATA)

  const addExpenseHandler = expense =>{
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
