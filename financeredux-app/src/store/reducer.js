import { AddExpense, DeleteExpense, SetCategory } from "./actions";

const initialState = {
  expensesArr: [],
  category: "all", 
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AddExpense:
      let newArr = [...state.expensesArr]
      newArr.push(action.payload)
      return { ...state, expensesArr: newArr }

    case DeleteExpense:
      let index = action.payload;
      let anotherNewArr = state.expensesArr.filter((expense) => expense.id !== index)
      return { ...state, expensesArr: anotherNewArr }

    case SetCategory:
      return { ...state, category: action.payload }
    default:
      return state;
  }
}
