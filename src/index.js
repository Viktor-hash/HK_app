import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Learn from "./learn_cantonese/learn_cantonese";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Learn />
  </StrictMode>
);
