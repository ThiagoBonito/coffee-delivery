import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 3rem;
  margin: 3rem 10rem 0 10rem;

  .info-success {
    display: flex;
    flex: 0.6;
    flex-direction: column;

    h3 {
      color: ${(props) => props.theme["yellow-700"]};
      font-size: 1.5rem;
      font-family: "Baloo 2", sans-serif;
    }
    span {
      color: ${(props) => props.theme["gray-200"]};
      font-family: "Roboto", sans-serif;
      margin-bottom: 2rem;
    }
    .card {
      display: flex;
      flex: 1;
      flex-direction: column;
      border-radius: 4px 30px 4px 30px;
      border: 1px solid ${(props) => props.theme["purple-500"]};

      .info {
        display: flex;
        flex: 1;
        gap: 0.5rem;
        margin: 1.5rem 2.5rem;

        .infoIconLocal {
          display: flex;
          height: fit-content;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          background-color: ${(props) => props.theme["purple-500"]};
        }

        .infoIconTimer {
          display: flex;
          height: fit-content;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          background-color: ${(props) => props.theme["yellow-500"]};
        }

        .infoIconPayment {
          display: flex;
          height: fit-content;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          background-color: ${(props) => props.theme["yellow-700"]};
        }

        .infoData {
          display: flex;
          flex-direction: column;
          color: ${(props) => props.theme["gray-200"]};
        }
      }
    }
  }
  .photo-success {
    display: flex;
    flex: 0.5;
  }
`;
