import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Text,
  use1,
  use2,
  use3,
  use4,
  Use5,
  Use6,
} from "@ito-mono/usestate-test";

function App() {
  const [count, setCount] = useState(0);
  //const ut = useToggleButton({ initialIsOn: true });
  //const ut1 = use1();
  //const ut2 = use2(1);
  //const ut3 = use3();
  //const ut4 = use4(2);
  //const ut5 = Use5();
  const ut6 = Use6();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Text>a</Text>
    </>
  );
}

export default App;
