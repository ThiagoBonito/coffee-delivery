import { FC } from "react";

import { Minus, Plus, Trash } from "phosphor-react";
import { Button, CartCard, CartContainer, TotalItems } from "./styles";

import expressoTradicional from "../../assets/expresso-tradicional.svg";

export const Cart: FC = () => {
  return (
    <CartContainer>
      <h4>Cafés selecionados</h4>
      <CartCard>
        <div className="item-card">
          <div className="photo">
            <img src={expressoTradicional} />
          </div>
          <div className="coffeInfo">
            <div>
              <p>Expresso Tradicional</p>
              <span>R$ 9,90</span>
            </div>
            <div className="quantity">
              <div className="controller">
                <p>
                  <Minus size={12} color={"#8047F8"} />
                </p>
                <p>1</p>
                <p>
                  <Plus size={12} color={"#8047F8"} />
                </p>
              </div>
              <div className="remove">
                <Trash size={12} color={"#8047F8"} />
                <p>REMOVER</p>
              </div>
              <div className="complete"></div>
            </div>
          </div>
        </div>
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
      </CartCard>
    </CartContainer>
  );
};
