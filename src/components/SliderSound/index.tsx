import { CloseCircleFilled, SoundFilled } from "@ant-design/icons";
import { Button, Slider, Space } from "antd";
import { useState } from "react";
import { useVolume } from "../../contextVolume";
import style from "./style.module.css";

const SliderSound = () => {
  const { volume, setVolume } = useVolume();
  const [isMuted, setIsMuted] = useState(false);

  const handleSliderChange = (value: number) => {
    setVolume && setVolume(value);
    if (value === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  return (
    <div>
      <Space>
        <Button type="text" icon={isMuted ? <CloseCircleFilled /> : <SoundFilled />} />
        <Slider defaultValue={volume} className={style.slider} onChange={handleSliderChange} />
      </Space>
    </div>
  );
};

export default SliderSound;
