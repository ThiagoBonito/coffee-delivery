import styled from "styled-components";

export const Item = styled.div`
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
`;
