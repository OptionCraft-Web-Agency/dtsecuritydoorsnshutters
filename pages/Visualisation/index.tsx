import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CanvasComponent from "@/components/Canvas";

export default function Home() {
  const [doorColor, setDoorColor] = useState("");
  const [pattern, setPattern] = useState("");
  const [rollerColor, setRollerColor] = useState("#ffffff");
  const [blindColor, setBlindColor] = useState("#ffffff");
  const [roofColor, setRoofColor] = useState("#ffffff");
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
              value={roofColor}
              onChange={(e) => setRoofColor(e.target.value)}
            />
          </div>
        </div>
        <div className="w-3/4 p-4">
          <CanvasComponent
            roofColor={roofColor}
            width={containerSize.width}
            height={containerSize.height}
          />
        </div>
      </div>
    </div>
  );
}
