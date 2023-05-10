import { Button, ButtonProps, Tooltip } from "antd";

interface Props extends ButtonProps {
  tooltip: string;
}

export const ButtonAntd = ({ tooltip, ...props }: Props) => {
  return (
    <Tooltip title={tooltip}>
      <Button {...props} />
    </Tooltip>
  );
};
