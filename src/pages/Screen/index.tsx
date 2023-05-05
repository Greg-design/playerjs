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
import style from "./styles.module.css";

const { Text } = Typography;

export const Screen = () => {
  return (
    <div className={style.container}>
      <Space className={style.areaVideo}>
        <Text>Passando</Text>
        <div className={style.btnFullScreen}>
          <Tooltip title="fullscreen">
            <Button icon={<FullscreenOutlined />} />
          </Tooltip>
        </div>
      </Space>
      <Space className={style.controls}>
        <Tooltip title="play">
          <Button type="primary" shape="circle" icon={<CaretRightOutlined />} />
        </Tooltip>
        <Tooltip title="stop">
          <Button type="text" icon={<MinusSquareFilled />} />
        </Tooltip>
        <Tooltip title="pause">
          <Button type="text" icon={<PauseCircleFilled />} />
        </Tooltip>
        <Tooltip title="fast back">
          <Button type="text" icon={<FastBackwardFilled />} />
        </Tooltip>
        <Tooltip title="fast forward">
          <Button type="text" icon={<FastForwardFilled />} />
        </Tooltip>
        <Tooltip title="vol">
          <div style={{ display: "flex" }}>
            <Button type="text" icon={<SoundFilled />} />
            <Slider defaultValue={30} className={style.slider} />
          </div>
        </Tooltip>
      </Space>
    </div>
  );
};
