import { FC } from "react";
import { Announcement } from "../../components/Announcement";
import { CoffeeCards } from "../../components/CoffeeCards";
import { coffeeList } from "../../utils/CoffeeData";
import { CoffeeContainer, CoffeeList, HomeContainer } from "./styles";

export const Home: FC = () => {
  return (
    <HomeContainer>
      <Announcement />
      <CoffeeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {coffeeList.map((coffee) => (
            <CoffeeCards
              key={coffee.id}
              title={coffee.title}
              description={coffee.description}
              types={coffee.types}
              price={coffee.price}
              image={coffee.img}
            />
          ))}
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  );
};
