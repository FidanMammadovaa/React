import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "./store/actions";

export function ExpensesForm() {
  const dispatch = useDispatch();
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("food"); 
  const [nextId, setNextId] = useState(1);

  
  const handleAddExpense = () => {
    const newExpense = {
      id: nextId,
      name: expenseName,
      amount: parseFloat(expenseAmount),
      category: expenseCategory,
    };

    setNextId(nextId + 1);

    dispatch(addExpense(newExpense));

    setExpenseName("");
    setExpenseAmount("");
    setExpenseCategory("food");
  };

  return (
    <div className="expense-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Category:</label>
        <select
          value={expenseCategory}
          onChange={(e) => setExpenseCategory(e.target.value)}
        >
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
        </select>
      </div>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
}
