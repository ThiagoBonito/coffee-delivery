import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { FC } from "react";
import {
  AddressContainer,
  BaseInput,
  CardAddress,
  CardPayment,
  WaysPayment,
} from "./styles";

export const Address: FC = () => {
  return (
    <AddressContainer>
      <h4>Complete seu pedido</h4>
      <CardAddress>
        <div className="title">
          <span>
            <MapPinLine size={22} color="#C47F17" />
          </span>
          <div>
            <h6>Endereço de Entrega</h6>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>
        <form>
          <div>
            <BaseInput type="text" flex={0.3} placeholder="CEP" />
          </div>
          <div>
            <BaseInput type="text" flex={1} placeholder="Rua" />
          </div>
          <div>
            <BaseInput type="text" flex={0.3} placeholder="Número" />
            <BaseInput type="text" flex={0.7} placeholder="Complemento" />
          </div>
          <div>
            <BaseInput type="text" flex={0.3} placeholder="Bairro" />
            <BaseInput type="text" flex={0.6} placeholder="Cidade" />
            <BaseInput type="text" flex={0.1} placeholder="UF" />
          </div>
        </form>
      </CardAddress>
      <CardPayment>
        <div className="title">
          <span>
            <CurrencyDollar size={22} color={"#8047F8"} />
          </span>
          <div>
            <h6>Pagamento</h6>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <WaysPayment>
          <button>
            <CreditCard size={22} color={"#8047F8"} />
            <p>CARTÃO DE CRÉDITO</p>
          </button>
          <button>
            <Bank size={22} color={"#8047F8"} />
            <p>CARTÃO DE DÉBITO</p>
          </button>
          <button>
            <Money size={22} color={"#8047F8"} />
            <p>DINHEIRO</p>
          </button>
        </WaysPayment>
      </CardPayment>
    </AddressContainer>
  );
};
