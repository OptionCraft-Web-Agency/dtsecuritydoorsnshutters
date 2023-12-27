import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import CanvasComponent from "@/components/Canvas";
import RollerComponent from "@/components/Roller";
import CostCalc from "@/components/CostCalc";
import Tests from "@/components/Tests";
import RollerComponentTest from "@/components/Tests";
import Static from "@/components/vis/StaticRoller";
import CurtainRoller from "@/components/vis/CurtainRoller";
import Inside from "@/components/vis/inside";
import InsideCurtain from "@/components/vis/insideCurtain";
import MainHeader from "@/components/MainHeader";

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
  const [selectedSection, setSelectedSection] = useState("Roof");
  const [bottom, setbottom] = useState("#ffffff");
  const [rail, setrail] = useState("#ffffff");
  const [headBox, setheadBox] = useState("#ffffff");
  const [slat, setslat] = useState("#ffffff");
  const [curtainsColor, setCurtainsColor] = useState(Array(23).fill("#ffffff"));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const [showRoller, setShowRoller] = useState(false);
  const [curtainColor, showCurtainColor] = useState(false);
  const [animationState, setAnimationState] = useState("paused");
  const [translateY, setTranslateY] = useState(0);

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
  const rollerSetters: ColorSetters = {
    HeadBox: setheadBox,
    Rail: setrail,
    Slat: setslat,
    Bottom: setbottom,
  };

  const [containerSize, setContainerSize] = useState({
    width: 800,
    height: 600,
  });

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

  const Curtain = [
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
  ];

  const handleColorSelection = (section: string, color: Color) => {
    const setColor = colorSetters[section];
    if (setColor) {
      setColor(color.code); // Set the new color using the setter function
      console.log(`Color for ${section} set to ${color.name} (${color.code})`);
    }
  };
  const handleRollerSelection = (section: string, color: Color) => {
    const setColor = rollerSetters[section];
    if (setColor) {
      setColor(color.code); // Set the new color using the setter function
      console.log(`Color for ${section} set to ${color.name} (${color.code})`);
    }
  };
  const handleIndexChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndex(Number(event.target.value));
  };

  const handleColorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };
  const movingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId: number | undefined;

    const getScrollLimit = () => {
      if (movingRef.current) {
        return -movingRef.current.offsetHeight / 4.2; // Height of the element
      }
      return -100; // Default if the element is not available
    };

    if (animationState !== "paused") {
      intervalId = window.setInterval(() => {
        const maxScroll = getScrollLimit();
        console.log(maxScroll);

        setTranslateY((currentY) => {
          if (animationState === "up") {
            return Math.max(currentY - 2, maxScroll);
          } else if (animationState === "down") {
            return Math.min(currentY + 2, 0);
          }
          return currentY;
        });
      }, 50);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [animationState]);

  return (
    <>
      <MainHeader />
      <div className="bg-[#F6F4EB]">
        <div className="container mx-auto ">
          <div className="flex  flex-col-reverse lg:flex-row ">
            <div className="w-full lg:w-1/2 2xl:w-1/3 wide:w-3/10">
              <div className="flex flex-row-reverse justify-evenly max-h-full lg:flex-row">
                {/* Color Selection */}
                <div className="overflow-auto w-full ">
                  <div className="mx-auto my-auto ">
                    {/* Section Picker for Roller*/}
                    {showRoller && (
                      <div className="flex flex-col justify-center w-full">
                        <div className="flex flex-rol my-10 xl:my-auto pt-4 overflow-y-auto justify-between pb-2 scrollbar-thin scrollbar-track-[#F1DEC9] scrollbar-thumb-[#8D7B68]">
                          {Object.keys(roller).map((section) => (
                            <button
                              key={section}
                              className={`px-7 py-2 m-1 ${
                                selectedSection === section
                                  ? "bg-gray-200"
                                  : "bg-white"
                              } border border-gray-300 rounded shadow`}
                              onClick={() => {
                                setSelectedSection(section);
                                showCurtainColor(false);
                              }}
                            >
                              {section}
                            </button>
                          ))}
                          <button
                            className={`px-6 py-2 m-1 ${
                              curtainColor ? "bg-gray-200" : "bg-white"
                            } border border-gray-300 rounded shadow`}
                            onClick={() => {
                              showCurtainColor(!curtainColor);
                              setSelectedSection("");
                            }}
                          >
                            Curtains
                          </button>
                        </div>
                        <div className="flex flex-row justify-evenly pt-1">
                          <button
                            className={`px-7 py-2 m-1 ${
                              animationState === "up"
                                ? "bg-gray-200"
                                : "bg-white"
                            } border border-gray-300 rounded shadow`}
                            onClick={() => setAnimationState("up")}
                          >
                            Scroll Up
                          </button>
                          <button
                            className={`px-7 py-2 m-1 ${
                              animationState === "paused"
                                ? "bg-gray-200"
                                : "bg-white"
                            } border border-gray-300 rounded shadow`}
                            onClick={() => setAnimationState("paused")}
                          >
                            Pause
                          </button>
                          <button
                            className={`px-7 py-2 m-1 ${
                              animationState === "down"
                                ? "bg-gray-200"
                                : "bg-white"
                            } border border-gray-300 rounded shadow`}
                            onClick={() => setAnimationState("down")}
                          >
                            Scroll Down
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Color Picker For house*/}
                    {!curtainColor && (
                      <div className="grid grid-cols-2 gap-2 my-10 flex-1 md:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 ultraWide:grid-cols-5 wide:mb-20">
                        {sections[selectedSection]?.map((color: Color) => (
                          <div
                            key={color.name}
                            className="flex flex-col items-center"
                          >
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
                      </div>
                    )}
                    {/* Color Picker For Roller */}
                    {!curtainColor && (
                      <div className="grid grid-cols-2 gap-2 my-10 flex-1 md:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 ultraWide:grid-cols-5 wide:mb-20">
                        {roller[selectedSection]?.map((color: Color) => (
                          <div
                            key={color.name}
                            className="flex flex-col items-center"
                          >
                            <button
                              className="w-24 h-24 rounded-md border border-gray-200 shadow-md cursor-pointer mb-2"
                              style={{ backgroundColor: color.code }}
                              onClick={() =>
                                handleRollerSelection(selectedSection, color)
                              }
                            ></button>
                            <span className="text-sm text-gray-700  sm:text-lg md:text-base 2xl:text-lg             ">
                              {color.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Color Picker For Curtain */}
                    {curtainColor && (
                      <div className="grid grid-cols-2 gap-2 my-10 flex-1 md:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 ultraWide:grid-cols-5 wide:mb-20">
                        {/* Dropdown to select curtain number */}
                        <div className="pb-2 px-2 col-span-2 md:col-span-3 2xl:col-span-3 3xl:col-span-4 ultraWide:col-span-5">
                          <select
                            className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline text-center"
                            value={selectedIndex}
                            onChange={handleIndexChange}
                          >
                            {Array.from({ length: 23 }, (_, i) => (
                              <option key={i} value={i}>
                                Curtain {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>

                        {Curtain.map((color, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center"
                          >
                            <button
                              className="w-24 h-24 rounded-md border border-gray-200 shadow-md cursor-pointer mb-2"
                              style={{ backgroundColor: color.code }}
                              onClick={() => {
                                updateCurtainColor(selectedIndex, color.code);
                              }}
                            ></button>
                            <span className="text-sm text-gray-700 sm:text-lg md:text-base 2xl:text-lg">
                              {color.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col my-10 xl:my-auto px-2">
                  {Object.keys(sections).map((section) => (
                    <button
                      key={section}
                      className={`px-4 py-2 m-1 ${
                        selectedSection === section ? "bg-gray-200" : "bg-white"
                      } border border-gray-300 rounded shadow`}
                      onClick={() => {
                        setSelectedSection(section);
                        showCurtainColor(false);
                      }}
                    >
                      {section}
                    </button>
                  ))}
                  <button
                    className={`px-4 py-2 m-1 ${
                      showRoller ? "bg-green-200" : "bg-slate-300"
                    } border border-gray-300 rounded shadow`}
                    onClick={() => {
                      setShowRoller(!showRoller);
                      showCurtainColor(false);
                    }}
                  >
                    Roller Shutter
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-full  lg:max-h-[1000px] lg:w-1/2 2xl:w-2/3 wide:w-7/10 mx-auto"
              ref={movingRef}
            >
              <div className="w-full h-[400px] md:h-[550px] xl:h-full">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div>
                    <InsideCurtain
                      width={containerSize.width}
                      height={containerSize.height}
                    />
                  </div>

                  {showRoller && (
                    <div id="Moving" className="z-0">
                      <CurtainRoller
                        curtainsColor={curtainsColor}
                        slat={slat}
                        width={containerSize.width}
                        height={containerSize.height}
                        translateY={translateY}
                      />
                    </div>
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
          </div>
        </div>
        <CostCalc />
      </div>
    </>
  );
}
