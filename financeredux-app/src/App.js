import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { ExpensesList } from "./ExpensesList";
import { ExpensesForm } from "./ExpensesForm";
import { setCategory } from "./store/actions";

function App() {
  let expensesArr = useSelector((state) => state.expensesArr);
  let category = useSelector((state) => state.category);

  useEffect(() => {
    console.log(expensesArr);
    console.log(category)
  }, [expensesArr]);

  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const filteredExpenses =
    category === "all"
      ? expensesArr
      : expensesArr.filter((expense) => expense.category === category);

  let totalAmount = 0;

  for (const expense of filteredExpenses) {
    totalAmount += expense.amount;
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="filter">
        <label>Filter by Category:</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
        </select>
      </div>
      <h1>{category.toUpperCase()}</h1>
      <ExpensesList expenses={filteredExpenses} />
      <div className="total">
        <p>Total Amount: {totalAmount}</p>
      </div>
      <ExpensesForm />
    </div>
  );
}

export default App;
