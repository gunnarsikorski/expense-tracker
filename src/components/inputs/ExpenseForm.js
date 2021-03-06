import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleAmountChange = (event) => {
		setAmount(event.target.value);
	};
	const handleDateChange = (event) => {
		setDate(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const expenseData = {
			title: title,
			amount: amount,
			date: new Date(date),
		};
        props.onSubmitExpenseData(expenseData)
        // above is where we passed this function down from NewExpense so we can pass up data
		setTitle('');
		setAmount('');
		setDate('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Expense Name</label>
					<input type='text' value={title} onChange={handleTitleChange} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='.01'
						step='.01'
						value={amount}
						onChange={handleAmountChange}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2024-12-31'
						value={date}
						onChange={handleDateChange}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='button' onClick={props.onCancel}>Cancel</button>
				<button type='submit'>Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
