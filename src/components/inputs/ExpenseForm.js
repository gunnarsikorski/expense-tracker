import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Expense Name</label>
					<input type='text' />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='.01' step='.01' />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2019-01-01' max='2024-12-31'/>
				</div>
			</div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
		</form>
	);
};

export default ExpenseForm;
