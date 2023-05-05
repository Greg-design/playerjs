import {
  CaretRightOutlined,
  FastBackwardFilled,
  FastForwardFilled,
  FullscreenOutlined,
  MinusSquareFilled,
  PauseCircleFilled,
  SoundFilled,
} from "@ant-design/icons";
import { Button, Slider, Space, Tooltip, Typography } from "antd";
import { useState } from "react";
import style from "./styles.module.css";

const { Text } = Typography;

export const Screen = () => {
  const [inicial, setInicial] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const handleTouchPlay = () => {
    setInicial(!inicial);
    setButtonText("Passando");
  };

  const handleTouchStop = () => {
    setButtonText("Parado");
  };

  const handleTouchPause = () => {
    setButtonText("Pausado");
  };

  const handleTouchBackward = () => {
    setButtonText("Retrocedendo");
  };

  const handleTouchForward = () => {
    setButtonText("Avançando");
  };

  const handleTouchSound = () => {
    setButtonText("Som");
  };

  return (
    <div className={style.container}>
      <Space className={style.areaVideo}>
        <Text>{inicial ? buttonText : "..."}</Text>
        <div className={style.btnFullScreen}>
          <Tooltip title="fullscreen">
            <Button icon={<FullscreenOutlined />} />
          </Tooltip>
        </div>
      </Space>
      <Space className={style.controls}>
        <Tooltip title="play">
          <Button onClick={handleTouchPlay} type="primary" shape="circle" icon={<CaretRightOutlined />} />
        </Tooltip>
        <Tooltip title="stop">
          <Button onClick={handleTouchStop} type="text" icon={<MinusSquareFilled />} />
        </Tooltip>
        <Tooltip title="pause">
          <Button onClick={handleTouchPause} type="text" icon={<PauseCircleFilled />} />
        </Tooltip>
        <Tooltip title="fast back">
          <Button onClick={handleTouchBackward} type="text" icon={<FastBackwardFilled />} />
        </Tooltip>
        <Tooltip title="fast forward">
          <Button onClick={handleTouchForward} type="text" icon={<FastForwardFilled />} />
        </Tooltip>

        <div style={{ display: "flex" }}>
          <Button onClick={handleTouchSound} type="text" icon={<SoundFilled />} />
          <Slider defaultValue={30} className={style.slider} />
        </div>
      </Space>
    </div>
  );
};
