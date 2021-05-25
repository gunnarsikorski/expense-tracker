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

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter
					selected={filteredYear}
					onFilterChange={filterChangeHandler}
				/>
				{props.expenses.map((item) => (
					<ExpenseItem
						title={item.title}
						amount={item.amount}
						date={item.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
