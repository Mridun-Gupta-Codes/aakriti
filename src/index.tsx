import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// Firebase is only used in the private production version

console.log(`
%c                _         _ _   _   ____   ___
     /\\        | |       (_) | (_) |___ \\ / _ \\
    /  \\   __ _| | ___ __ _| |_ _    __) | | | |
   / /\\ \\ / _\` | |/ / '__| | __| |  |__ <| | | |
  / ____ \\ (_| |   <| |  | | |_| |  ___) | |_| |
 /_/    \\_\\__,_|_|\\_\\_|  |_|\\__|__| |____(_)___/

%c   AAKRITI 3.0 - THE SHAPE OF INNOVATION
`, "color: #bc13fe; font-weight: bold;", "color: #00f3ff; font-weight: bold;");

console.log("Aakriti Fest Website – Public Demo");

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}