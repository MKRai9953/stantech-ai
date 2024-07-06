import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FinanceContext } from "../../context/FinanceContext";
import Spinner from "../spinner/Spinner";

const TransactionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransactionItem = styled.li`
  list-style: none;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const TransactionList = () => {
  const { transactions, setTransactions } = useContext(FinanceContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/transactions");
        setTransactions(res.data);
      } catch (err) {
        setError("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, [setTransactions]);

  const filterByDateRange = (transactions) => {
    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return (
        (!startDate || transactionDate >= new Date(startDate)) &&
        (!endDate || transactionDate <= new Date(endDate))
      );
    });
  };

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  return (
    <TransactionListWrapper>
      <h2>Transaction List</h2>
      <Input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <Input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <ul>
        {filterByDateRange(transactions).map((transaction) => (
          <TransactionItem key={transaction.id}>
            {transaction.description} - ${transaction.amount} (
            {transaction.category}) [{transaction.type}]
          </TransactionItem>
        ))}
      </ul>
    </TransactionListWrapper>
  );
};

export default TransactionList;
