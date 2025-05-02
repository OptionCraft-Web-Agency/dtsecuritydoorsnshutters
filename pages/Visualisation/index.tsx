"use client";

import React, { useState, useRef, useEffect } from "react";
import CanvasComponent from "@/components/Canvas";
import Static from "@/components/vis/StaticRoller";
import CurtinRoller from "@/components/vis/CurtinRoller";
import InsideCurtin from "@/components/vis/InsideCurtin";
import ColorPickerSection from "@/components/CurtinComponent/ColorPickerSection";
import CurtinPicker from "@/components/CurtinComponent/CurtinPicker";
import SectionButtons from "@/components/CurtinComponent/SectionButtons";
import RollerControls from "@/components/CurtinComponent/RollerControls";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import HeroSection from "@/components/HeroSection";

type Color = {
  name: string;
  code: string;
};

const roller: Record<string, Color[]> = {
  HeadBox: [
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
    { name: "Woodland Grey", code: "#5E5C57" },
  ],
  Rail: [
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
    { name: "Woodland Grey", code: "#5E5C57" },
  ],
  Slat: [
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
    { name: "Woodland Grey", code: "#5E5C57" },
  ],
  Bottom: [
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
    { name: "Woodland Grey", code: "#5E5C57" },
  ],
};

const sections: Record<string, Color[]> = {
  Roof: [
    { name: "Woodland Grey", code: "#5E5C57" },
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Black", code: "#222222" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
  ],
  LowerRoof: [
    { name: "Woodland Grey", code: "#5E5C57" },
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Black", code: "#222222" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
  ],
  Facia: [
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Woodland Grey", code: "#5E5C57" },
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Black", code: "#222222" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
  ],
  LeftWall: [
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
    { name: "Woodland Grey", code: "#5E5C57" },
  ],
  RightWall: [
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
    { name: "Woodland Grey", code: "#5E5C57" },
  ],
  FrontWall: [
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
    { name: "Woodland Grey", code: "#5E5C57" },
  ],
  Pillars: [
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
    { name: "Woodland Grey", code: "#5E5C57" },
  ],
  Door: [
    { name: "Classic Cream", code: "#E7E1C1" },
    { name: "Paperbark", code: "#CEC2AA" },
    { name: "White", code: "#F9F9F9" },
    { name: "Surfmist", code: "#E2E3E0" },
    { name: "Windspray", code: "#929899" },
    { name: "Blue Ridge", code: "#35434C" },
    { name: "Deep Ocean", code: "#475161" },
    { name: "Evening Haze", code: "#C4C0B0" },
    { name: "Pale Eucalypt", code: "#7A8978" },
    { name: "Wilderness", code: "#65796D" },
    { name: "Cottage Green", code: "#335244" },
    { name: "Shale Grey", code: "#BFBEBD" },
    { name: "Sandbank", code: "#D1B988" },
    { name: "Jasper", code: "#806E5C" },
    { name: "Loft", code: "#44393D" },
    { name: "Headland", code: "#975540" },
    { name: "Dune", code: "#B7B2AC" },
    { name: "Manor Red", code: "#793F30" },
    { name: "Bushland", code: "#8A8A7F" },
    { name: "Woodland Grey", code: "#5E5C57" },
  ],
};

const curtin = [
  { name: "Classic Cream", code: "#E7E1C1" },
  { name: "Paperbark", code: "#CEC2AA" },
  { name: "White", code: "#F9F9F9" },
  { name: "Surfmist", code: "#E2E3E0" },
  { name: "Deep Ocean", code: "#475161" },
  { name: "Shale Grey", code: "#BFBEBD" },
  { name: "Sandbank", code: "#D1B988" },
  { name: "Jasper", code: "#806E5C" },
  { name: "Dune", code: "#B7B2AC" },
  { name: "Manor Red", code: "#793F30" },
  { name: "Bushland", code: "#8A8A7F" },
  { name: "Woodland Grey", code: "#5E5C57" },
];

export default function Home() {
  const [roofMainColor, setRoofMainColor] = useState("#ffffff");
  const [lowerRoofColor, setlowerRoofColor] = useState("#ffffff");
  const [facia, setfacia] = useState("#ffffff");
  const [leftWallColor, setleftWallColor] = useState("#ffffff");
  const [pillarsColor, setpillarsColor] = useState("#ffffff");
  const [frontWall, setfrontWall] = useState("#ffffff");
  const [rightWallColor, setrightWallColor] = useState("#ffffff");
  const [doorColor, setdoorColor] = useState("#ffffff");

  const [bottom, setbottom] = useState("#ffffff");
  const [rail, setrail] = useState("#ffffff");
  const [headBox, setheadBox] = useState("#ffffff");
  const [slat, setslat] = useState("#ffffff");

  const [curtinsColor, setCurtinsColor] = useState(Array(23).fill("#ffffff"));
  const [selectedSection, setSelectedSection] = useState("Roof");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showRoller, setShowRoller] = useState(false);
  const [curtinColor, setCurtinColor] = useState(false);

  const [animationState, setAnimationState] = useState<"paused" | "up" | "down">("paused");
  const [translateY, setTranslateY] = useState(0);
  const movingRef = useRef<HTMLDivElement>(null);

  const containerSize = { width: 800, height: 600 };

  const colorSetters: Record<string, React.Dispatch<React.SetStateAction<string>>> = {
    Roof: setRoofMainColor,
    LowerRoof: setlowerRoofColor,
    Facia: setfacia,
    LeftWall: setleftWallColor,
    Pillars: setpillarsColor,
    FrontWall: setfrontWall,
    RightWall: setrightWallColor,
    Door: setdoorColor,
  };

  const rollerSetters: Record<string, React.Dispatch<React.SetStateAction<string>>> = {
    HeadBox: setheadBox,
    Rail: setrail,
    Slat: setslat,
    Bottom: setbottom,
  };

  const handleColorSelection = (section: string, color: Color) => {
    const setColor = colorSetters[section];
    if (setColor) setColor(color.code);
  };

  const handleRollerSelection = (section: string, color: Color) => {
    const setColor = rollerSetters[section];
    if (setColor) setColor(color.code);
  };

  const updateCurtinColor = (index: number, color: string) => {
    setCurtinsColor((prev) => {
      const updated = [...prev];
      updated[index] = color;
      return updated;
    });
  };

  useEffect(() => {
    let intervalId: number | undefined;
    const getScrollLimit = () =>
      movingRef.current?.offsetHeight ? -movingRef.current.offsetHeight / 4.2 : -100;

    if (animationState !== "paused") {
      intervalId = window.setInterval(() => {
        const maxScroll = getScrollLimit();
        setTranslateY((prev) =>
          animationState === "up"
            ? Math.max(prev - 2, maxScroll)
            : animationState === "down"
            ? Math.min(prev + 2, 0)
            : prev
        );
      }, 50);
    }

    return () => clearInterval(intervalId);
  }, [animationState]);

  const captureVisualization = async () => {
    const element = document.getElementById("HouseVis");
    if (!element) return "";
    const canvas = await html2canvas(element);
    return canvas.toDataURL("image/png");
  };

  const generatePDF = async () => {
    const image = await captureVisualization();
    const doc = new jsPDF();
    if (image) doc.addImage(image, "PNG", 15, 40, 180, 160);

    const text = `
      Roof Main: ${roofMainColor}
      Lower Roof: ${lowerRoofColor}
      Facia: ${facia}
      Left Wall: ${leftWallColor}
      Pillars: ${pillarsColor}
      Front Wall: ${frontWall}
      Right Wall: ${rightWallColor}
      Door: ${doorColor}
      Roller - Bottom: ${bottom}, Rail: ${rail}, HeadBox: ${headBox}, Slat: ${slat}
      Curtins: ${curtinsColor.join(", ")}
    `;
    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 15, 210);
    doc.save("DT-Visualisation.pdf");
  };

  return (
    <div>
      <HeroSection title="Color Visualization"/>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row my-10">
        <div className="w-full lg:w-1/2 2xl:w-1/3">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="w-full overflow-auto">
              <RollerControls
                showRoller={showRoller}
                animationState={animationState}
                setAnimationState={setAnimationState}
                setShowRoller={setShowRoller}
                curtinColor={curtinColor}
                setCurtinColor={setCurtinColor}
                setSelectedSection={setSelectedSection}
                selectedSection={selectedSection}
              />

              {!curtinColor ? (
                <ColorPickerSection
                  selectedSection={selectedSection}
                  data={showRoller ? roller : sections}
                  handleSelection={showRoller ? handleRollerSelection : handleColorSelection}
                />
              ) : (
                <CurtinPicker
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                  updateCurtinColor={updateCurtinColor}
                  curtinsColor={curtinsColor}
                />
              )}
            </div>

            <SectionButtons
              sections={sections}
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
              setCurtinColor={setCurtinColor}
              showRoller={showRoller}
              setShowRoller={setShowRoller}
              rollerKeys={Object.keys(roller)}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 2xl:w-2/3" ref={movingRef} id="HouseVis">
          <div className="w-full h-[400px] md:h-[550px] xl:h-full relative">
            <InsideCurtin width={containerSize.width} height={containerSize.height} />
            {showRoller && (
              <CurtinRoller
                CurtinsColor={curtinsColor}
                slat={slat}
                width={containerSize.width}
                height={containerSize.height}
                translateY={translateY}
              />
            )}
            <CanvasComponent
              door={doorColor}
              facia={facia}
              frontWall={frontWall}
              left={leftWallColor}
              lowerRoof={lowerRoofColor}
              pillars={pillarsColor}
              right={rightWallColor}
              roof={roofMainColor}
              width={containerSize.width}
              height={containerSize.height}
            />
            {showRoller && (
              <Static
                bottom={bottom}
                rail={rail}
                headBox={headBox}
                width={containerSize.width}
                height={containerSize.height}
              />
            )}
          </div>
        </div>
      </div>

      <div className="text-center my-10">
        <button
          onClick={generatePDF}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          Download Visualization For Attachment
        </button>
      </div>
    </div>
  );
}