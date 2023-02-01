import React from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { Container, HeaderContent, NewTransactionButton } from "./styles";

import logo from "../../assets/logo.svg";

import { NewTransactionModal } from "../NewTransactionModal";

export const Header = () => {
  return (
    <Container>
      <HeaderContent>
        <img src={logo} alt="logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </Container>
  );
};
