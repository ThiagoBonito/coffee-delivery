import { FC } from "react";
import {
  ClientInfo,
  HeaderContainer,
  ShoppingCartButton,
  UserLocal,
} from "./styles";

import LogoCoffeeDelivery from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={LogoCoffeeDelivery} />
      </div>
      <ClientInfo>
        <UserLocal>
          <MapPin size={30} color={"#8047F8"} weight="fill" />
          <p>Santos, SP</p>
        </UserLocal>
        <ShoppingCartButton>
          <ShoppingCart size={30} color={"#C47F17"} weight="fill" />
        </ShoppingCartButton>
      </ClientInfo>
    </HeaderContainer>
  );
};
