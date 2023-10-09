import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpense } from './store/actions';

export function ExpensesList({ expenses }) {
  const dispatch = useDispatch();

  const handleDeleteExpense = (expenseId) => {
    dispatch(deleteExpense(expenseId));
  };

  return (
    <div>
      <h2>Expences List</h2>
      <ul>
        {expenses.map((expense) => (
          <div key={expense.id}>
            <p>Name: {expense.name} </p>
            <p>Amount: {expense.amount}</p>
            <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
