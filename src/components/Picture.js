import React from "react";
import css from "./picture.module.css";

export default function Picture({ imageSource, description }) {
  const { picture } = css;
  return (
    <div>
      <img
        className={picture}
        src={imageSource}
        alt={description}
        title={description}
      />
    </div>
  );
}
