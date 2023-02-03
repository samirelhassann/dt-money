import { createContext, ReactNode, useState } from "react";

import { api } from "../lib/axios";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

type CreateTransactionInput = {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
};

interface TransactionContextType {
  transactions: Array<Transaction>;
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction(data: CreateTransactionInput): Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string): Promise<void> {
    const response = await api.get("/transactions", {
      params: { _sort: "createdAt", _order: "desc", q: query },
    });

    setTransactions(response.data);
  }

  async function createTransaction(
    data: CreateTransactionInput
  ): Promise<void> {
    const { description, price, category, type } = data;

    const createdTransaction = await api.post("/transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => {
      return [...state, createdTransaction.data];
    });
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
