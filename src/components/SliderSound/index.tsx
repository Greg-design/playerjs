import { SoundFilled } from "@ant-design/icons";
import { Button, Slider, Space } from "antd";
import style from "./style.module.css";

const SliderSound = () => {
  return (
    <Space>
      <Button type="text" icon={<SoundFilled />} />
      <Slider defaultValue={30} className={style.slider} />
    </Space>
  );
};

export default SliderSound;
