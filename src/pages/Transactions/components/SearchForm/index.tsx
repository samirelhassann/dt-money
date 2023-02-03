import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import * as z from "zod";

import { SearchFormContainer } from "./styles";

import { TransactionsContext } from "../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const { fetchTransactions } = useContext(TransactionsContext);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search for transactions"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Search
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;
