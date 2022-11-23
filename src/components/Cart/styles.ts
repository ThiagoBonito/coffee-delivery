import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: column;

  h4 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme["gray-200"]};
    margin-bottom: 1rem;
  }
`;

export const CartCard = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme["white-500"]};
  border-radius: 6px 40px;
`;
