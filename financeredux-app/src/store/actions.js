export const DeleteExpense = 'Delete Expense';
export const AddExpense = 'Add Expense';
export const SetCategory = 'Set Category';

export function addExpense(expense) {
  return {
    type: AddExpense,
    payload: expense,
  };
}

export function deleteExpense(expenseId) {
  return {
    type: DeleteExpense,
    payload: expenseId,
  };
}

export function setCategory(category) {
  return {
    type: SetCategory,
    payload: category,
  };
}
