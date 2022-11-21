import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
`;

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const UserLocal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-100"]};
  p {
    font-size: 1rem;
    color: ${(props) => props.theme["purple-700"]};
  }
`;

export const ShoppingCartButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["yellow-100"]};
`;
