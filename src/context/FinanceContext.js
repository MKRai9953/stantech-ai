import React, { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <FinanceContext.Provider
      value={{ transactions, setTransactions, addTransaction }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
