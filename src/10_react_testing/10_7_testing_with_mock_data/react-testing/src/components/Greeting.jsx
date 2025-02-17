import React from "react";

export function Greeting({ name }) {
  return <h1>Merhaba, {name || "Dünya"}</h1>;
}
