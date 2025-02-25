import React from "react";
import {assets} from "../../assets/assets";
import "./AppDownload.css";

function AppDownload() {

  return (
    <>
      <div className="app-download" id="app-download">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          eveniet voluptatum obcaecati quis dolorem? Expedita a adipisci velit
          accusantium ullam.
          <br />
        </p>
        <div className="app-download-platform">
            <img src={assets.play_store} alt=""/>
            <img src={assets.app_store} alt=""/>
        </div>
      </div>
    </>
  );
}

export default AppDownload;
