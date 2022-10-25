import "./styles.css";
import React from "react";
import tonechart from "./tonechart.gif";

export default function learn_cantonese() {
  return (
    <>
      <div className="learn_cantonese">
        <h1>Learn Cantonese </h1>
        <h2>Tones </h2>
        <p>There are 6 tones in Cantonese.</p>
        <img src={tonechart} />
      </div>
    </>
  );
}
