import { FC } from "react";
import { Button, TotalItems } from "./styles";

export const TotalCart: FC = () => {
  return (
    <TotalItems>
      <div className="items">
        <p>Total de itens</p>
        <p>R$ 29,70</p>
      </div>
      <div className="items">
        <p>Entrega</p>
        <p>R$ 3,50</p>
      </div>
      <div className="total-items">
        <p>Total de itens</p>
        <p>R$ 29,70</p>
      </div>
      <Button>CONFIRMAR PEDIDO</Button>
    </TotalItems>
  );
};
