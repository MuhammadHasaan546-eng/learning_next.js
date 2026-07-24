// src/app/layout.js
import React from "react";

export default function Layout({ children, team }) {
  return (
    <body>
      {/* Yeh main app page.js dikhayega */}
      <div>{children}</div>

      {/* Yeh @team/page.js ko render karega */}
      <div>{team}</div>
    </body>
  );
}
