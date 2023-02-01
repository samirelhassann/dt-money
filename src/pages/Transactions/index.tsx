import React from "react";

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import SearchForm from "./components/SearchForm";

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website Development</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Sells</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">
                  - R$ 12.000,00
                </PriceHighLight>
              </td>
              <td>Sells</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Food</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Sells</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
