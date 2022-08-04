import React, {useState} from 'react';
import '../css/NewExpense.css'
import ExpenseForm from  './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const[isClicked, setIsClicked] = useState(false)

    const onEditingHandler = () =>{
        setIsClicked(true);
    }

    const pressCancelHandler = () => {
        setIsClicked(false);
    }

    return(
        <div className='new-expense'>
            {!isClicked && <button onClick={onEditingHandler}>Add expense</button>}
            {isClicked && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onHide = {pressCancelHandler} />}
        </div>
    )
};

export default NewExpense