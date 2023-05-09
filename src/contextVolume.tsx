import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Volume = createContext<{ volume: number; setVolume?: (value: number) => void }>({
  volume: 0,
});

export const Provider = ({ children }: Props) => {
  const [volume, setVolume] = useState(50);

  return <Volume.Provider value={{ volume, setVolume }}>{children}</Volume.Provider>;
};

export const useVolume = () => useContext(Volume);
