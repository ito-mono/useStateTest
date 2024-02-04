import { r as t } from "./index-sET28UM5.js";
const r = (a = !1) => {
  const [e, s] = t.useState(a), o = t.useCallback(() => {
    s(!e);
  }, [e]);
  return [e, o];
};
export {
  r as default
};
