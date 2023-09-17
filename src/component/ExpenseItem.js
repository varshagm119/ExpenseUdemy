import './ExpenseItem.css'

function ExpenseItem(props) {
  // const expenseDate = new Date(2023,9,11);
  // const expenseTitle = "Car Insurance";
  // const expenseAmt = '546';
  //const LocationOfExpenditure = 'Bengaluru'

  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div>{props.LocationOfExpenditure}</div>
      <div className='expense-item__description'> 
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>
      Rs{props.amount}
      </div>
    </div>
  );
}

export default ExpenseItem;
