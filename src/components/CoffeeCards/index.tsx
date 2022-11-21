import { FC } from "react";

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import ExpressoTradicional from "../../assets/expresso-tradicional.svg";
import {
  Cart,
  CoffeeCard,
  CoffeeDescription,
  CoffeeImage,
  CoffeeName,
  CoffeeValues,
  ContentCoffee,
  Quantity,
  Value,
} from "./styles";

type CoffeeCardsProps = {
  title: string;
  description: string;
  types: string[];
  price: number;
  image: string;
};

export const CoffeeCards: FC<CoffeeCardsProps> = ({
  title,
  description,
  types,
  price,
  image,
}) => {
  return (
    <CoffeeCard>
      <CoffeeImage src={image} />
      <ContentCoffee>
        {types.map((type) => (
          <span>{type}</span>
        ))}
      </ContentCoffee>
      <CoffeeName>{title}</CoffeeName>
      <CoffeeDescription>{description}</CoffeeDescription>
      <CoffeeValues>
        <Value>
          <span>R$</span> {price}
        </Value>
        <Quantity>
          <p>
            <Minus size={16} color="#8047F8" />
          </p>
          <p>1</p>
          <p>
            <Plus size={16} color="#8047F8" />
          </p>
        </Quantity>
        <Cart>
          <ShoppingCartSimple size={22} weight="fill" />
        </Cart>
      </CoffeeValues>
    </CoffeeCard>
  );
};
