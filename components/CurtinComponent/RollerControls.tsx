import React from "react";
import { FaChevronUp, FaPause, FaChevronDown } from "react-icons/fa";

interface RollerControlsProps {
  showRoller: boolean;
  animationState: "paused" | "up" | "down";
  setAnimationState: React.Dispatch<React.SetStateAction<"paused" | "up" | "down">>;
  setShowRoller: React.Dispatch<React.SetStateAction<boolean>>;
  curtinColor: boolean;
  setCurtinColor: React.Dispatch<React.SetStateAction<boolean>>;
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
}

const rollerSections = ["HeadBox", "Rail", "Slat", "Bottom"];

const RollerControls: React.FC<RollerControlsProps> = ({
  showRoller,
  animationState,
  setAnimationState,
  setShowRoller,
  curtinColor,
  setCurtinColor,
  selectedSection,
  setSelectedSection,
}) => {
  return (
    <div className="space-y-4 p-4">
      {/* Section Selection */}
      {showRoller && (
        <div className="flex flex-wrap justify-center gap-2">
          {rollerSections.map((section) => (
            <button
              key={section}
              className={`px-4 py-2 border rounded shadow text-sm ${
                selectedSection === section ? "bg-gray-300" : "bg-white"
              }`}
              onClick={() => {
                setSelectedSection(section);
                setCurtinColor(false);
              }}
            >
              {section}
            </button>
          ))}
          <button
            className={`px-4 py-2 border rounded shadow text-sm ${
              curtinColor ? "bg-gray-300" : "bg-white"
            }`}
            onClick={() => {
              setCurtinColor(true);
              setSelectedSection("");
            }}
          >
            Curtins
          </button>
        </div>
      )}

      {/* Scroll Controls with Icons */}
      {showRoller && (
        <div className="flex justify-center gap-3 mt-2">
          <button
            onClick={() => setAnimationState("up")}
            className={`flex items-center gap-2 px-6 py-2 border rounded shadow ${
              animationState === "up" ? "bg-gray-300" : "bg-white"
            }`}
          >
            <FaChevronUp />
            Up
          </button>
          <button
            onClick={() => setAnimationState("paused")}
            className={`flex items-center gap-2 px-6 py-2 border rounded shadow ${
              animationState === "paused" ? "bg-gray-300" : "bg-white"
            }`}
          >
            <FaPause />
            Pause
          </button>
          <button
            onClick={() => setAnimationState("down")}
            className={`flex items-center gap-2 px-6 py-2 border rounded shadow ${
              animationState === "down" ? "bg-gray-300" : "bg-white"
            }`}
          >
            <FaChevronDown />
            Down
          </button>
        </div>
      )}
    </div>
  );
};

export default RollerControls;