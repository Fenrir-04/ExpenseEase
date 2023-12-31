import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'expense-00011219',
    title: 'New Home TV',
    amount: 485,
    date: new Date(2023, 3, 26),
  },
  {
    id: 'expense-42091219',
    title: 'New Car Sterio',
    amount: 650,
    date: new Date(2023, 3, 27),
  },
  {
    id: 'expense-02011210',
    title: 'Car Insurance',
    amount: 234.5,
    date: new Date(2023, 3, 28),
  },
  {
    id: 'expense-02434811',
    title: 'Mobile Phone Installment',
    amount: 34.56,
    date: new Date(2023, 3, 29),
  },
  {
    id: 'expense-53714669',
    title: 'Car Installment',
    amount: 475,
    date: new Date(2023, 3, 30),
  },
  {
    id: 'expense-53732059',
    title: 'Estate Taxes',
    amount: 637,
    date: new Date(2023, 4, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const formSubmitHandler = (formData) => {
    setExpenses((prevState) => [formData, ...prevState]);
  };

  return (
    <div className='App'>
      <NewExpense onSubmit={formSubmitHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
