import React, { useState } from 'react';
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/inputs/NewExpense'

const dummyExpenses = [
	{
		id: 'e1',
		title: 'New PC Part',
		amount: 299.95,
		date: new Date(2020, 6, 5),
	},
	{
		id: 'e2',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: 'e3',
		title: 'New TV',
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: 'e4',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e5',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];


const App = () => {

	const [expenses, setExpenses] = useState(dummyExpenses)

	const addExpenseHandler = (expense) => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses]
		})
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expenses expenses={expenses}/>
		</div>
	);
}

export default App;
