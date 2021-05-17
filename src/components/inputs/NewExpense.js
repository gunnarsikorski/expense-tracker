import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    // The function to help pass data from child to parent (from ExpenseForm up to this component, then to app)
    const submitExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;