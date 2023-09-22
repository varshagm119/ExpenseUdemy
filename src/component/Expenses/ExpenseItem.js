import React from 'react';
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);
 
  const[amt,setAmt] = useState(props.amount);
  const amtHandle = () => {
    setAmt('100');
    //document.getElementById('amtBt').innerHTML='hi'
    console.log(amt)
  }
  const deleteExpenseHandler = () =>{
    setTitle('Updated!');
    console.log(0);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price' id='amtBt'>${amt}</div>
      </div>
      <button className='expense_btn' onClick={deleteExpenseHandler}>Change title</button>
      <button className='expense_btn' onClick={amtHandle}>resetAmt</button>
    </Card>
  );
}

export default ExpenseItem;