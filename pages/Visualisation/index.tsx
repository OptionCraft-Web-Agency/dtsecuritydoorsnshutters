import { useState, useEffect, useRef } from "react";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/4 p-4 space-y-4">
          <div id="roller" className="">
            {" "}
          </div>
          <div id="door" className="">
            {" "}
          </div>
          <div id="blind" className="">
            {" "}
          </div>
        </div>
        <div className="w-3/4 p-4">
          <img
            src="/Vis/open.png"
            alt="Roller Shutter"
            className="w-full h-auto"
            style={{ maxWidth: "800px" }}
          />
        </div>
      </div>
    </div>
  );
}
