import React, { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
    setShowForm(false);
  };

  const showExpenseForm = () => {
    setShowForm(true);
  };

  const hideExpenseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={showExpenseForm}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideExpenseForm}
        />
      )}
    </div>
  );
}
