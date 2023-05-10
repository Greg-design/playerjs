import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip, Typography } from "antd";
import { useState } from "react";
import { VideoEstado } from "../../pages/Screen";
import VolumeNaTela from "../VolumeNaTela";
import style from "./style.module.css";

const { Text } = Typography;

interface TelaDeReproducaoProps {
  video: VideoEstado;
}

const TelaDeReproducao = ({ video }: TelaDeReproducaoProps) => {
  const [fullscreen, setFullscreen] = useState(false);

  const handleClickFullScreen = () => {
    const container = document.documentElement;
    if (fullscreen) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }

    setFullscreen(!fullscreen);
  };

  return (
    <div className={style.aspectRatio}>
      <Space className={`${style.areaVideo} ${fullscreen ? style.fullscreen : ""}`}>
        <div>
          <Text className={style.center}>{video}</Text>
        </div>
        <div className={style.btnFullScreen}>
          <Tooltip title="fullscreen">
            <Button
              type="text"
              onClick={handleClickFullScreen}
              icon={fullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
            />
          </Tooltip>
        </div>
        <div className={style.sliderGradient}>
          <VolumeNaTela />
        </div>
      </Space>
    </div>
  );
};

export default TelaDeReproducao;
