import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [titleHandle, setTitleHandle] = useState(props.title);

  // eslint-disable-next-line
  const titleHandler = (event) => {
    setTitleHandle(event.target.value);
  };
// eslint-disable-next-line
  const titleChangeHandler = (event) => {
    setTitle(titleHandle);
  }


  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <input type = 'text ' onChange={titleHandler} />
      <button type="submit" onClick = {titleChangeHandler}>Change</button> */}
    </Card>
    </li>
  );
};
export default ExpenseItem;
