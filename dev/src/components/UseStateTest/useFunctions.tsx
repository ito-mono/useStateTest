import { useState } from "react";

export function use1() {
  const [state, setState] = useState(0);
  return { state, setState };
}

export function use2(init: number) {
  const [state, setState] = useState(init);
  return { state, setState };
}

export const use3 = () => {
  const [state, setState] = useState(0);
  return { state, setState };
};

export const use4 = (init: number) => {
  const [state, setState] = useState(init);
  return { state, setState };
};

export function Use5() {
  const [state, setState] = useState(0);
  return { state, setState };
}

export const Use6 = () => {
  const [state, setState] = useState(0);
  return { state, setState };
};

export default function Use7() {
  const [state, setState] = useState(0);
  return { state, setState };
}
