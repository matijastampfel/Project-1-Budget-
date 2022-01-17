import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({ expenses }) => {
  return (
    <Card>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </Card>
  );
}

export default Expenses;
