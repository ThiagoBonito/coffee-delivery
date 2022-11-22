import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import { FC } from "react";
import {
  AddressContainer,
  BaseInput,
  CardAddress,
  CardPayment,
  CartCard,
  CartContainer,
  CheckoutContainer,
  WaysPayment,
} from "./styles";

import expressoTradicional from "../../assets/expresso-tradicional.svg";

export const Checkout: FC = () => {
  return (
    <CheckoutContainer>
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
      <CartContainer>
        <h4>Cafés selecionados</h4>
        <CartCard>
          <div className="item-card">
            <div className="photo">
              <img src={expressoTradicional} />
            </div>
            <div className="coffeInfo">
              <div>
                <p>Expresso Tradicional</p>
                <span>R$ 9,90</span>
              </div>
              <div className="quantity">
                <div className="controller">
                  <p>
                    <Minus size={12} color={"#8047F8"} />
                  </p>
                  <p>1</p>
                  <p>
                    <Plus size={12} color={"#8047F8"} />
                  </p>
                </div>
                <div className="remove">
                  <Trash size={12} color={"#8047F8"} />
                  <p>REMOVER</p>
                </div>
                <div className="complete"></div>
              </div>
            </div>
          </div>
        </CartCard>
      </CartContainer>
    </CheckoutContainer>
  );
};
