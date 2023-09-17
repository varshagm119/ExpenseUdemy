import "./ExpenseItem.css";
function ExpenseDetails(props) {
  return (
    <div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div>{props.LocationOfExpenditure}</div>
      </div>
      <div className="expense-item__price">Rs{props.amount}</div>
    </div>
  );
}
export default ExpenseDetails;
