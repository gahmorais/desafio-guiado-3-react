import React from "react";
import css from './Spinner.module.css'

export default function Spinner({ description }) {
  const {flexRow} = css
  return (
    <div className={flexRow}>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div style={{fontSize: '2rem', fontWeight:'bold', marginLeft:'10px'}}>{description}</div>
    </div>
  );
}
