import { FC } from "react";

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { SuccessContainer } from "./styles";
import delivery from "../../assets/delivery.svg";

export const SuccessCard: FC = () => {
  return (
    <SuccessContainer>
      <div className="info-success">
        <h3>Uhu! Pedido confirmado</h3>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <div className="card">
          <div className="info">
            <div className="infoIconLocal">
              <MapPin size={16} color={"#fff"} weight={"fill"} />
            </div>
            <div className="infoData">
              <p>
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div className="info">
            <div className="infoIconTimer">
              <Timer size={16} color={"#fff"} weight={"fill"} />
            </div>
            <div className="infoData">
              <p>Previsão de entrega</p>
              <p>
                <b>20 min - 30 min</b>
              </p>
            </div>
          </div>
          <div className="info">
            <div className="infoIconPayment">
              <CurrencyDollar size={16} color={"#fff"} weight={"fill"} />
            </div>
            <div className="infoData">
              <p>Pagamento na entrega</p>
              <p>
                <b>Cartão de Crédito</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="photo-success">
        <img src={delivery} />
      </div>
    </SuccessContainer>
  );
};
