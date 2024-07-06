import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { FinanceContext } from "../../context/FinanceContext";
import Spinner from "../spinner/Spinner"; // Import the Spinner component

const SummaryWrapper = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Summary = () => {
  const { transactions } = useContext(FinanceContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Simulate loading completion
  }, []);

  if (loading) return <Spinner />; // Display the Spinner component while loading

  // Calculate total income, expenses, and balance
  const totalIncome = transactions.reduce((total, transaction) => {
    return transaction.type === "income" ? total + transaction.amount : total;
  }, 0);

  const totalExpenses = transactions.reduce((total, transaction) => {
    return transaction.type === "expense" ? total + transaction.amount : total;
  }, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <SummaryWrapper>
      <h2>Summary</h2>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Balance: ${balance}</p>
    </SummaryWrapper>
  );
};

export default Summary;
