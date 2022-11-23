import { FC } from "react";
import { ItemCart } from "../ItemCart";
import { TotalCart } from "../TotalCart";

import { CartCard, CartContainer } from "./styles";

export const Cart: FC = () => {
  return (
    <CartContainer>
      <h4>Cafés selecionados</h4>
      <CartCard>
        <ItemCart />
        <ItemCart />
        <TotalCart />
      </CartCard>
    </CartContainer>
  );
};
