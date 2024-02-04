import { Dispatch, SetStateAction, useState } from "react";

const useText = (
  initialValue: string
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
};

export default useText;
