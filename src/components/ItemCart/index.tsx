import { FC } from "react";
import { Item } from "./styles";

import expressoTradicional from "../../assets/expresso-tradicional.svg";
import { Minus, Plus, Trash } from "phosphor-react";

export const ItemCart: FC = () => {
  return (
    <Item>
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
    </Item>
  );
};
