import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from "zod";

import {
  Close,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

import { TransactionsContext } from "../../contexts/TransactionsContext";

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionSchema>;

export const NewTransactionModal = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionSchema),
  });

  const { createTransaction } = useContext(TransactionsContext);

  const handleSubmitNewTransaction = (data: NewTransactionFormInputs) => {
    createTransaction(data);

    reset();
  };

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <Dialog.Close asChild>
          <Close>
            <X size={24} />
          </Close>
        </Dialog.Close>

        <form action="" onSubmit={handleSubmit(handleSubmitNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Price"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <TransactionType
                onValueChange={(value) => onChange(value)}
                value={value}
              >
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entry
                </TransactionTypeButton>

                <TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Exit
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
