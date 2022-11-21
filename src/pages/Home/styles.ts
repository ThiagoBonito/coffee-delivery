import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 10rem;
  margin: 3rem 0 0;
`;

export const CoffeeContainer = styled.div`
  margin-top: 3rem;

  h2 {
    color: ${(props) => props.theme["gray-200"]};
    font-family: "Baloo 2", sans-serif;
  }
`;

export const CoffeeList = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  gap: 2rem;
`;
