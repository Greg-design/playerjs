import { CloseCircleFilled, SoundFilled } from "@ant-design/icons";
import { Button, Slider, Space } from "antd";
import { useState } from "react";
import style from "./style.module.css";

const SliderSound = () => {
  const [isMuted, setIsMuted] = useState(false);

  const handleSliderChange = (value: number) => {
    if (value === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };
  return (
    <Space>
      <Button type="text" icon={isMuted ? <CloseCircleFilled /> : <SoundFilled />} />
      <Slider defaultValue={30} className={style.slider} onChange={handleSliderChange} />
    </Space>
  );
};

export default SliderSound;
