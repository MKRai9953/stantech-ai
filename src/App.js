import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FinanceProvider } from "./context/FinanceContext";
import {
  AddTransaction,
  CategoryBreakdown,
  Summary,
  TransactionList,
} from "./components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #4a4a4a;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const App = () => {
  return (
    <FinanceProvider>
      <GlobalStyle />
      <Container>
        <Header>Personal Finance Tracker</Header>
        <Card>
          <AddTransaction />
        </Card>
        <Card>
          <TransactionList />
        </Card>
        <Card>
          <Summary />
        </Card>
        <Card>
          <CategoryBreakdown />
        </Card>
      </Container>
    </FinanceProvider>
  );
};

export default App;
