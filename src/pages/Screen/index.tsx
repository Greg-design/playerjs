import {
  CaretRightOutlined,
  FastBackwardFilled,
  FastForwardFilled,
  MinusSquareFilled,
  PauseCircleFilled,
} from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import { useState } from "react";
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
        <Tooltip title="play">
          <Button
            onClick={handleClickControlesVideo("Passando")}
            type="primary"
            shape="circle"
            icon={<CaretRightOutlined />}
          />
        </Tooltip>
        <Tooltip title="stop">
          <Button onClick={handleClickControlesVideo("Parado")} type="text" icon={<MinusSquareFilled />} />
        </Tooltip>
        <Tooltip title="pause">
          <Button onClick={handleClickControlesVideo("Pausado")} type="text" icon={<PauseCircleFilled />} />
        </Tooltip>
        <Tooltip title="fast back">
          <Button onClick={handleClickControlesVideo("Retrocedendo")} type="text" icon={<FastBackwardFilled />} />
        </Tooltip>
        <Tooltip title="fast forward">
          <Button onClick={handleClickControlesVideo("Avançando")} type="text" icon={<FastForwardFilled />} />
        </Tooltip>

        <SliderSound />
      </Space>
    </div>
  );
};
