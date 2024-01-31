import { useToggleButtonReturn } from ".";

export type ToggleButtonProps = {
  props: useToggleButtonReturn;
};

export function ToggleButton({ props }: ToggleButtonProps) {
  return <button onClick={props.onClick}>{props.isOn ? "ON" : "OFF"}</button>;
}
