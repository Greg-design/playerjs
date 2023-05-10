import {
  FastBackwardFilled as Back,
  FastForwardFilled as Forward,
  PauseCircleFilled as Pause,
  CaretRightOutlined as Play,
  MinusSquareFilled as Stop,
} from "@ant-design/icons";
import { Space } from "antd";
import { useState } from "react";
import { ButtonAntd as PButtom } from "../../components/ButtonAntd";
import SliderSound from "../../components/SliderSound";
import TelaDeReproducao from "../../components/TelaDeReproducao";
import style from "./styles.module.css";

export type VideoEstado = "Passando" | "Pausado" | "Parado" | "Retrocedendo" | "Avançando";

export const Screen = () => {
  const [video, setEstadoVideo] = useState<VideoEstado>("Pausado");
  const handleClickControlesVideo = (videoEstado: VideoEstado) => () => setEstadoVideo(videoEstado);

  return (
    <div className={style.container}>
      <TelaDeReproducao video={video} />
      <Space className={style.controls}>
        <PButtom
          tooltip="play"
          onClick={handleClickControlesVideo("Passando")}
          type="primary"
          shape="circle"
          icon={<Play />}
        />
        <PButtom tooltip="stop" onClick={handleClickControlesVideo("Parado")} type="text" icon={<Stop />} />
        <PButtom tooltip="pause" onClick={handleClickControlesVideo("Pausado")} type="text" icon={<Pause />} />
        <PButtom tooltip="retroceder" onClick={handleClickControlesVideo("Retrocedendo")} type="text" icon={<Back />} />
        <PButtom tooltip="avançar" onClick={handleClickControlesVideo("Avançando")} type="text" icon={<Forward />} />

        <SliderSound />
      </Space>
    </div>
  );
};
