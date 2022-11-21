import { FC } from "react";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  AnnouncementInfo,
  AnnouncementPhoto,
  Announcements,
  OptionColor,
  OptionRow,
  OptionsAnnouncement,
  TitleAnnouncement,
} from "./styles";

import CoffeePhoto from "../../assets/Coffee.svg";

export const Announcement: FC = () => {
  return (
    <Announcements>
      <AnnouncementInfo>
        <TitleAnnouncement>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>
        </TitleAnnouncement>
        <OptionsAnnouncement>
          <OptionRow>
            <div className="option">
              <OptionColor color={"yellowDark"}>
                <ShoppingCart size={12} color={"#fff"} weight="fill" />
              </OptionColor>
              <p>Compra simples e segura</p>
            </div>
            <div className="option">
              <OptionColor color={"gray"}>
                <Package size={12} color={"#fff"} weight="fill" />
              </OptionColor>
              <p>Embalagem mantém o café intacto</p>
            </div>
          </OptionRow>
          <OptionRow>
            <div className="option">
              <OptionColor color={"yellow"}>
                <Timer size={12} color={"#fff"} weight="fill" />
              </OptionColor>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="option">
              <OptionColor color={"purple"}>
                <Coffee size={12} color={"#fff"} weight="fill" />
              </OptionColor>
              <p>O café chega fresquinho até você</p>
            </div>
          </OptionRow>
        </OptionsAnnouncement>
      </AnnouncementInfo>
      <AnnouncementPhoto>
        <img src={CoffeePhoto} />
      </AnnouncementPhoto>
    </Announcements>
  );
};
