import React from "react";

type Color = {
  name: string;
  code: string;
};

interface SectionButtonsProps {
  sections: Record<string, Color[]>;
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
  setCurtinColor: React.Dispatch<React.SetStateAction<boolean>>;
  showRoller: boolean;
  setShowRoller: React.Dispatch<React.SetStateAction<boolean>>;
  rollerKeys: string[];
}

const SectionButtons: React.FC<SectionButtonsProps> = ({
  sections,
  selectedSection,
  setSelectedSection,
  setCurtinColor,
  showRoller,
  setShowRoller,
}) => {
  return (
    <div className="flex flex-col my-4 px-2">
      {Object.keys(sections).map((section) => (
        <button
          key={section}
          disabled={showRoller}
          onClick={() => {
            setSelectedSection(section);
            setCurtinColor(false);
          }}
          className={`px-4 py-2 m-1 border rounded shadow text-sm transition ${
            selectedSection === section ? "bg-gray-200" : "bg-white"
          } ${showRoller ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
        >
          {section}
        </button>
      ))}

      <button
        onClick={() => {
          const nextShowRoller = !showRoller;
          setShowRoller(nextShowRoller);
          setCurtinColor(false);
          if (nextShowRoller) {
            setSelectedSection("HeadBox"); // Automatically select HeadBox
          }
        }}
        className={`px-4 py-2 m-1 border rounded shadow text-sm ${
          showRoller ? "bg-green-200" : "bg-slate-300"
        }`}
      >
        Roller Shutter
      </button>

    </div>
  );
};

export default SectionButtons;