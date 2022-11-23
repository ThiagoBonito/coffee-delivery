import styled from "styled-components";

export const CoffeeCard = styled.div`
  display: flex;
  background-color: ${(props) => props.theme["white-500"]};
  max-width: 220px;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  margin-bottom: 2.5rem;
`;

export const CoffeeImage = styled.img`
  position: relative;
  bottom: 2rem;
`;

export const ContentCoffee = styled.div`
  display: flex;
  margin-bottom: 1rem;
  gap: 0.5rem;

  span {
    background-color: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-700"]};
    border-radius: 16px;
    padding: 0.5rem;
    font-size: 0.5rem;
    font-weight: bold;
  }
`;

export const CoffeeName = styled.h3`
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["gray-200"]};
`;

export const CoffeeDescription = styled.h5`
  display: flex;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  font-weight: normal;
  align-items: center;
  color: ${(props) => props.theme["gray-150"]};
`;

export const CoffeeValues = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Value = styled.div`
  display: flex;
  flex: 0.6;
  gap: 0.2rem;
  margin-left: 1.5rem;
  margin-right: 0.25rem;
  align-items: center;
  font-family: "Baloo 2", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray-100"]};

  span {
    font-weight: normal;
    font-size: 0.95rem;
  }
`;
export const Quantity = styled.div`
  display: flex;
  flex: 0.3;
  gap: 0.4rem;
  justify-content: space-around;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["gray-120"]};
`;

export const Cart = styled.button`
  display: flex;
  flex: 0.1;
  margin-right: 1.5rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme["purple-700"]};
  color: ${(props) => props.theme["white"]};
`;
