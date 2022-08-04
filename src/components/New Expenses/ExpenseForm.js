import { useState } from "react";
import "../css/ExpenseForm.css";

const ExpenseForm = ({onSaveExpenseData, onHide}) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value)
  }

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle('')
    setEnteredDate('')
    setEnteredAmount('')
   
  }

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label style={{color: 'whitesmoke'}}>Title</label>
          <input value={enteredTitle} type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label style={{color: 'whitesmoke'}}>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label style={{color: 'whitesmoke'}}>Date</label>
          <input
          value={enteredDate}
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>

      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={onHide} >Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
