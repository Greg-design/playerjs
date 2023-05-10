import { useVolume } from "../../contextVolume";

export default function VolumeNaTela() {
  const { volume } = useVolume();

  return (
    <div>
      <svg width={14} height={100}>
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#dddddd55" />
            <stop offset={`${100 - volume}%`} stop-color="#dddddd55" />
            <stop offset={`${100 - volume}%`} stop-color="#1677ff" />
            <stop offset="100%" stop-color="#1677ff" />
          </linearGradient>
        </defs>
        <polygon points={`0,0 14,0 14,100`} fill="url(#myGradient)" />
      </svg>
    </div>
  );
}
