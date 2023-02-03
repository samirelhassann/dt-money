import React from "react";

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { Container, SummaryCard } from "./styles";

import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";

export const Summary = () => {
  const summary = useSummary();

  return (
    <Container>
      <SummaryCard>
        <header>
          <span>Entries</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outflows</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </Container>
  );
};
