import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [doorColor, setDoorColor] = useState("");
  const [pattern, setPattern] = useState("");
  const [rollerColor, setRollerColor] = useState("#ffffff");
  const [blindColor, setBlindColor] = useState("#ffffff");

  const colors = [
    "Pearl White",
    "Birch White",
    "Primrose",
    "Bronze",
    "Paperbark",
    "Deep Ocean",
    "Pottery",
    "Shale Grey",
    "Brown",
    "Stain Black",
    "Dune",
    "Jasper",
    "Green",
    "A.P.O. Grey",
    "Ultra Silver",
    "Notre Dame",
    "Woodland",
    "Anodised",
    "Surfmist",
    "Monument",
  ];

  const patterns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/4 p-4 space-y-4">
          {/* Garage Roller */}
          <div id="roller">
            <p>Garage Roller</p>
            <input type="color" value={rollerColor} className="colorPicker" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Animate
            </button>
          </div>
          {/* Security Door */}
          <div id="door">
            <p>Security Door</p>
            <select
              value={doorColor}
              onChange={(e) => setDoorColor(e.target.value)}
              className="colorDropdown"
            >
              <option value="">Select a color</option>
              {colors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>

            <select
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="patternDropdown"
            >
              <option value="">Select a pattern</option>
              {patterns.map((letter, index) => (
                <option key={index} value={letter}>
                  {letter}
                </option>
              ))}
            </select>
          </div>
          {/* Window Blind */}
          <div id="blind">
            <p>Window Blind</p>
            <input type="color" value={blindColor} className="colorPicker" />

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Action
            </button>
          </div>
        </div>
        <div className="w-3/4 p-4">
          <Image
            src="/Vis/open.png"
            alt="Roller Shutter"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
