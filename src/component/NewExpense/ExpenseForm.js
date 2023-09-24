import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmt, setEnteredAmt] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

//using a single state instea:-
// const [userInput,setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmt: '',
//     enteredDate: ''
// })
  const titleChangeHandle = (event) => {
    setEnteredTitle(event.target.value);
    //the follwing is used when a single state is used for all the input values:-
    //setUserInput({...userInput,enteredTitle: event.target.value});
    //enteredTitle is override after the spread operator
    //the best way to write the above func that keeps the previous state:-
    // setUserInput((prevState) => {
    //     return {...prevState,enteredTitle: event.target.value}
    // })

  };
  const amtChangeHandle = (event) => {
    setEnteredAmt(event.target.value);
    //setUserInput({...userInput,enteredAmt: event.target.value});
  };
  const dateChangeHandle = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({...userInput,enteredDate: event.target.value});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmt,
        date: new Date(enteredDate)
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmt('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmt}
            min="0.1"
            step="0.1"
            onChange={amtChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandle}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
