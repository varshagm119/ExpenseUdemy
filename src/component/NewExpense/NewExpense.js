import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        //console.log(ExpenseData);
        props.onAddExpense(ExpenseData);
    };

    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>);
};

export default NewExpense