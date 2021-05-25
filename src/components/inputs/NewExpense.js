import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    // The function to help pass data from child to parent (from ExpenseForm up to this component, then to app)
    const submitExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
};

export default NewExpense;