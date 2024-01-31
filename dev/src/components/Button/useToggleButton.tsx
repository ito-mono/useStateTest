import { useState } from "react";

export type useToggleButtonProps = {
  initialIsOn?: boolean;
};

export type useToggleButtonReturn = {
  isOn: boolean;
  onClick: () => void;
};

export function useToggleButton({
  initialIsOn = false,
}: useToggleButtonProps): useToggleButtonReturn {
  const [isOn, setIsOn] = useState(initialIsOn);
  return { isOn, onClick };

  function onClick() {
    setIsOn((prev) => !prev);
  }
}
