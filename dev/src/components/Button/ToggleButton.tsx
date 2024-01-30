import { useState } from "react";

export function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  return <button onClick={onClick}>{isOn ? "ON" : "OFF"}</button>;

  function onClick() {
    setIsOn((prev) => !prev);
  }
}
