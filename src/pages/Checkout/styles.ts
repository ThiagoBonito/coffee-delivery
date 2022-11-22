import styled from "styled-components";

type BaseInputProps = {
  flex: number;
};

export const CheckoutContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 1.5rem;
  margin: 3rem 10rem 0 10rem;
`;

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

export const CartCard = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme["white-500"]};
  border-radius: 6px 40px;

  .item-card {
    display: flex;
    width: 100%;
    height: 22%;
    gap: 0.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme["gray-120"]};

    .photo {
      display: flex;
      justify-content: center;
      width: 20%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .coffeInfo {
      display: flex;
      width: 80%;
      padding-top: 0.5rem;
      flex-direction: column;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;

        p {
          font-family: "Roboto", sans-serif;
          color: ${(props) => props.theme["gray-200"]};
        }

        span {
          font-family: "Baloo 2", sans-serif;
          font-weight: bold;
          color: ${(props) => props.theme["gray-200"]};
        }
      }

      .quantity {
        display: flex;
        flex: 1;
        gap: 0.5rem;
        margin-bottom: 0.75rem;

        .controller {
          display: flex;
          flex: 0.3;
          padding: 0.45rem;
          border-radius: 6px;
          background-color: ${(props) => props.theme["gray-120"]};
          justify-content: space-around;

          p {
            align-items: center;
          }
        }
        .remove {
          display: flex;
          flex: 0.3;
          gap: 0.5rem;
          padding: 0.5rem;
          border-radius: 6px;
          background-color: ${(props) => props.theme["gray-120"]};
          justify-content: space-around;
          align-items: center;

          p {
            font-size: 0.8rem;
            color: ${(props) => props.theme["gray-200"]};
          }
        }
        .complete {
          display: flex;
          flex: 0.4;
        }
      }
    }
  }
`;

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
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
`;
