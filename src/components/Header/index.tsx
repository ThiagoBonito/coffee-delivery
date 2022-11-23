import { FC } from "react";
import {
  ClientInfo,
  HeaderContainer,
  ShoppingCartButton,
  UserLocal,
} from "./styles";

import LogoCoffeeDelivery from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/" title="Home">
          <img src={LogoCoffeeDelivery} />
        </NavLink>
      </div>
      <ClientInfo>
        <UserLocal>
          <MapPin size={30} color={"#8047F8"} weight="fill" />
          <p>Santos, SP</p>
        </UserLocal>
        <ShoppingCartButton>
          <NavLink to="/checkout" title="Carrinho de compras">
            <ShoppingCart size={30} color={"#C47F17"} weight="fill" />
          </NavLink>
        </ShoppingCartButton>
      </ClientInfo>
    </HeaderContainer>
  );
};
