
import React from "react";
import { ProvedorContexto } from "../Contexts/index.js";
import { AppU } from "./AppU.js";

function App() {
  return (
    <ProvedorContexto>
      <AppU/>
    </ProvedorContexto>
  );
}


export default App;
