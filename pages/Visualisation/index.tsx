import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import CanvasComponent from "@/components/Canvas";
import RollerComponent from "@/components/Roller";
import CostCalc from "@/components/CostCalc";

interface ColorSetters {
  [key: string]: Dispatch<SetStateAction<string>>;
}

export default function Home() {
  const [roofMainColor, setRoofMainColor] = useState("#ffffff");
  const [lowerRoofColor, setlowerRoofColor] = useState("#ffffff");
  const [facia, setfacia] = useState("#ffffff");
  const [leftWallColor, setleftWallColor] = useState("#ffffff");
  const [pillarsColor, setpillarsColor] = useState("#ffffff");
  const [frontWall, setfrontWall] = useState("#ffffff");
  const [rightWallColor, setrightWallColor] = useState("#ffffff");
  const [doorColor, setdoorColor] = useState("#ffffff");
  const [customColor, setcustomColor] = useState("#ffffff");
  const colorSetters: ColorSetters = {
    Roof: setRoofMainColor,
    LowerRoof: setlowerRoofColor,
    Facia: setfacia,
    LeftWall: setleftWallColor,
    Pillars: setpillarsColor,
    FrontWall: setfrontWall,
    RightWall: setrightWallColor,
    Door: setdoorColor,
  };

  const [containerSize, setContainerSize] = useState({
    width: 800,
    height: 600,
  });
  const [selectedSection, setSelectedSection] = useState("Roof");
  const [selectedColor, setSelectedColor] = useState("");
  const [bottom, setbottom] = useState("#ffffff");
  const [rail, setrail] = useState("#ffffff");
  const [headBox, setheadBox] = useState("#ffffff");
  const [slat, setslat] = useState("#ffffff");
  const [curtainsColor, setCurtainsColor] = useState(Array(23).fill("#ffffff"));

  const updateCurtainColor = (index: number, color: string) => {
    setCurtainsColor((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = color;
      return newColors;
    });
  };

  interface Color {
    name: string;
    code: string;
  }

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

  const handleColorSelection = (section: string, color: Color) => {
    const setColor = colorSetters[section];
    if (setColor) {
      setColor(color.code); // Set the new color using the setter function
      console.log(`Color for ${section} set to ${color.name} (${color.code})`);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex bg-red-200 flex-col-reverse lg:flex-row ">
        <div className="w-full lg:w-1/2 2xl:w-1/3 wide:w-3/10">
          <div className="flex flex-row-reverse justify-evenly max-h-full lg:flex-row">
            {/* Color Selection */}
            <div className="overflow-auto w-full">
              <div className="grid grid-cols-2 gap-2 my-10 flex-1 md:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 ultraWide:grid-cols-5 wide:mb-20">
                {sections[selectedSection]?.map((color: Color) => (
                  <div key={color.name} className="flex flex-col items-center">
                    <button
                      className="w-24 h-24 rounded-md border border-gray-200 shadow-md cursor-pointer mb-2"
                      style={{ backgroundColor: color.code }}
                      onClick={() =>
                        handleColorSelection(selectedSection, color)
                      }
                    ></button>
                    <span className="text-sm text-gray-700  sm:text-lg md:text-base 2xl:text-lg             ">
                      {color.name}
                    </span>
                  </div>
                ))}
                {/* TODO:: Adding custom color input */}
              </div>
            </div>
            <div className="flex flex-col my-10 xl:my-auto px-2">
              {Object.keys(sections).map((section) => (
                <button
                  key={section}
                  className={`px-4 py-2 m-1 ${
                    selectedSection === section ? "bg-gray-200" : "bg-white"
                  } border border-gray-300 rounded shadow`}
                  onClick={() => setSelectedSection(section)}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:max-h-[1000px] lg:w-1/2 2xl:w-2/3 wide:w-7/10 mx-auto">
          <div className="w-full h-[500px] md:h-[550px] xl:h-full">
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
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
              {/**
               * <RollerComponent
                curtainsColor={curtainsColor}
                bottom={bottom}
                rail={rail}
                headBox={headBox}
                slat={slat}
                width={containerSize.width}
                height={containerSize.height}
              /> 
              
              */}
            </div>
          </div>
        </div>
      </div>
      <CostCalc />
    </div>
  );
}
