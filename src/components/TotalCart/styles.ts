import styled from "styled-components";

export const TotalItems = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 1.5rem;

  .items {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }

  .total-items {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${(props) => props.theme["gray-200"]};
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme["yellow-500"]};
  color: ${(props) => props.theme["white"]};
  padding: 0.75rem;
  align-items: center;
  justify-content: center;
`;
