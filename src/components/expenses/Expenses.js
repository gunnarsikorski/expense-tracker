import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.expenses.filter((item) => {
		return item.date.getFullYear().toString() === filteredYear;
	});

	let expensesContent = <p>No Expenses Found</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((item) => (
			<ExpenseItem
				key={item.id} // Always add this key when mapping out items
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		));
	}

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter
					selected={filteredYear}
					onFilterChange={filterChangeHandler}
				/>
				{expensesContent}
			</Card>
		</div>
	);
};

export default Expenses;
