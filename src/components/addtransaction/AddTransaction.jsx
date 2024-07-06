import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FinanceContext } from "../../context/FinanceContext";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Select = styled.select`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #45a049;
  }
`;

const AddTransaction = () => {
  const { addTransaction } = useContext(FinanceContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      amount: parseFloat(amount),
      category,
      type,
      date: new Date().toISOString(),
    });
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <Select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </Select>
      <Button type="submit">Add Transaction</Button>
    </Form>
  );
};

export default AddTransaction;
