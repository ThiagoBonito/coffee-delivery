import { FC } from "react";
import { CheckoutContainer } from "./styles";

import { Address } from "../../components/Address";
import { Cart } from "../../components/Cart";

export const Checkout: FC = () => {
  return (
    <CheckoutContainer>
      <Address />
      <Cart />
    </CheckoutContainer>
  );
};
