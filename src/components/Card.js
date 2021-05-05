import React from "react";
import css from "./card.module.css";

export default function Card({ children }) {
  const { cardExtra } = css;
  const classes = `card ${cardExtra}`;
  return <div className={classes}>{children}</div>;
}
