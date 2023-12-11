import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CanvasComponent from "@/components/Canvas";

export default function Home() {
  const [roofMainColor, setRoofMainColor] = useState("#ffffff");
  const [lowerRoofColor, setlowerRoofColor] = useState("#ffffff");
  const [leftDWallColor, setleftDWallColor] = useState("#ffffff");
  const [leftWallColor, setleftWallColor] = useState("#ffffff");
  const [pillarsColor, setpillarsColor] = useState("#ffffff");
  const [pillarsBaseColor, setpillarsBaseColor] = useState("#ffffff");
  const [rightDWallColor, setrightDWallColor] = useState("#ffffff");
  const [rightWallColor, setrightWallColor] = useState("#ffffff");
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({
    width: 800,
    height: 600,
  });

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

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setContainerSize({
          width: Math.max(offsetWidth, 800),
          height: Math.max(offsetHeight, 600),
        });
      }
    };

    // Set initial size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/4 p-4 space-y-4">
          <div>
            <input
              type="color"
              value={roofMainColor}
              onChange={(e) => setRoofMainColor(e.target.value)}
            />
            <input
              type="color"
              value={lowerRoofColor}
              onChange={(e) => setlowerRoofColor(e.target.value)}
            />
            <input
              type="color"
              value={leftDWallColor}
              onChange={(e) => setleftDWallColor(e.target.value)}
            />
            <input
              type="color"
              value={leftWallColor}
              onChange={(e) => setleftWallColor(e.target.value)}
            />
            <input
              type="color"
              value={pillarsColor}
              onChange={(e) => setpillarsColor(e.target.value)}
            />
            <input
              type="color"
              value={pillarsBaseColor}
              onChange={(e) => setpillarsBaseColor(e.target.value)}
            />
            <input
              type="color"
              value={rightDWallColor}
              onChange={(e) => setrightDWallColor(e.target.value)}
            />
            <input
              type="color"
              value={rightWallColor}
              onChange={(e) => setrightWallColor(e.target.value)}
            />
          </div>
        </div>
        <div className="w-3/4 p-4 min-h-[600px]">
          <CanvasComponent
            mainRoofColor={roofMainColor}
            lowerRoofColor={lowerRoofColor}
            leftDWallColor={leftDWallColor}
            leftWallColor={leftWallColor}
            pillarsColor={pillarsColor}
            pillarsBaseColor={pillarsBaseColor}
            rightDWallColor={rightDWallColor}
            rightWallColor={rightWallColor}
            width={containerSize.width}
            height={containerSize.height}
          />
        </div>
      </div>
    </div>
  );
}
