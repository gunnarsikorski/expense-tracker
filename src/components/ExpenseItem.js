import React from 'react';
import './ExpenseItem.css';


function ExpenseItem() {
	const expenseDate = new Date(2021, 4, 5);
	const expenseTitle = 'New PC Part';
	const expenseAmount = 299.95;

	return (
		<div className='expense-item'>
			<div>{expenseDate.toISOString()}</div>
			<div className='expense-item__description'>
				<h2>{expenseTitle}</h2>
				<div className='expense-item__price'>${expenseAmount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
