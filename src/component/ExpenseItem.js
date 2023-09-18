import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem (props) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} title={props.title} amount={props.amount} />
    </div>
  );
}

export default ExpenseItem;
