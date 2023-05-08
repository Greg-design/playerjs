import { FullscreenOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip, Typography } from "antd";
import { useState } from "react";
import { VideoEstado } from "../../pages/Screen";
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
    <Space className={`${style.areaVideo} ${fullscreen ? style.fullscreen : ""}`}>
      <Text>{video}</Text>
      <div className={style.btnFullScreen}>
        <Tooltip title="fullscreen">
          <Button onClick={handleClickFullScreen} icon={<FullscreenOutlined />} />
        </Tooltip>
      </div>
    </Space>
  );
};

export default TelaDeReproducao;
