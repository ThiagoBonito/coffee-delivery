import styled from "styled-components";

type BaseInputProps = {
  flex: number;
};

export const AddressContainer = styled.div`
  display: flex;
  flex: 0.6;
  flex-direction: column;

  h4 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme["gray-200"]};
    margin-bottom: 1rem;
  }
`;

export const CardAddress = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme["white-500"]};
  border-radius: 6px;

  .title {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h6 {
      margin: 0.5rem 0;
      font-size: 1rem;
      padding-top: 1rem;
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme["gray-200"]};
      line-height: 1.25rem;
    }
    span {
      margin-bottom: 1.75rem;
    }
    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme["gray-100"]};
      margin-bottom: 2rem;
    }
  }
  form {
    display: flex;
    flex: 1;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const BaseInput = styled.input<BaseInputProps>`
  display: flex;
  flex: ${(props) => props.flex};
  padding: 0.5rem;
  background-color: ${(props) => props.theme["gray-140"]};
  border: 1px solid ${(props) => props.theme["gray-120"]};
  color: ${(props) => props.theme["gray-150"]};
  border-radius: 6px;

  &:focus {
    outline: none;
  }
`;

export const CardPayment = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.theme["white-500"]};
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  border-radius: 6px;

  .title {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h6 {
      margin: 0.5rem 0;
      font-size: 1rem;
      padding-top: 1rem;
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme["gray-200"]};
      line-height: 1.25rem;
    }
    span {
      margin-bottom: 1.75rem;
    }
    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme["gray-100"]};
      margin-bottom: 1.5rem;
    }
  }
`;

export const WaysPayment = styled.div`
  display: flex;
  flex: 1;
  gap: 0.75rem;
  button {
    display: flex;
    flex: 0.33;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.65rem;
    background-color: ${(props) => props.theme["gray-120"]};
    border: none;
    border-radius: 8px;
    p {
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.75rem;
    }
  }
`;
