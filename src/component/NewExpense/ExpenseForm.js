import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const titleChangeHandle = (event) =>{
        console.log(event.target.value);
    }
    const amtChangeHandle = (event) =>{
        console.log(event.target.value);
    }
    const dateChangeHandle = (event) =>{
        console.log(event.target.value);
    }
    return (<form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.1" step="0.1" onChange={amtChangeHandle} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandle}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);
};

export default ExpenseForm;