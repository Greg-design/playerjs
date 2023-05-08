import { CloseCircleFilled, SoundFilled } from "@ant-design/icons";
import { Button, Slider, Space } from "antd";
import { useState } from "react";
import style from "./style.module.css";

const SliderSound = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [a, setA] = useState(0);

  const handleSliderChange = (value: number) => {
    setA(value);
    if (value === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  return (
    <div>
      <div>
        <svg>
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stop-color="transparent" />
              <stop offset={`${100 - a}%`} stop-color="transparent" />
              <stop offset={`${100 - a}%`} stop-color="#1677ff" />
              <stop offset="100%" stop-color="#1677ff" />
            </linearGradient>
          </defs>
          <polygon points={`0,0 20,0 20,100`} fill="url(#myGradient)" />
        </svg>
      </div>

      <Space>
        <Button type="text" icon={isMuted ? <CloseCircleFilled /> : <SoundFilled />} />
        <Slider defaultValue={30} className={style.slider} onChange={handleSliderChange} />
      </Space>
    </div>
  );
};

export default SliderSound;
