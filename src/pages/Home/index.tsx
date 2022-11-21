import { FC } from "react";
import { Announcement } from "../../components/Announcement";
import { CoffeeContainer, CoffeeList, HomeContainer } from "./styles";

export const Home: FC = () => {
  return (
    <HomeContainer>
      <Announcement />
      <CoffeeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          <h1>Card</h1>
          <h1>Card</h1>
          <h1>Card</h1>
          <h1>Card</h1>
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  );
};
