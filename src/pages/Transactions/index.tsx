import React, { useContext, useEffect, useState } from "react";

import { format } from "date-fns";

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import SearchForm from "./components/SearchForm";

import {
  Transaction,
  TransactionsContext,
} from "../../contexts/TransactionsContext";

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction: Transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    R$ {transaction.price}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{format(new Date(transaction.createdAt), "dd/MM/yyyy")}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
