import React from "react";

interface CurtinPickerProps {
  selectedIndex: number;
  updateCurtinColor: (index: number, color: string) => void;
  curtinsColor: string[];
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CurtinPicker: React.FC<CurtinPickerProps> = ({
  selectedIndex,
  setSelectedIndex,
  updateCurtinColor,
}) => {
  const curtinColors = [
    "#E7E1C1", "#CEC2AA", "#F9F9F9", "#E2E3E0", "#475161",
    "#BFBEBD", "#D1B988", "#806E5C", "#B7B2AC", "#793F30",
    "#8A8A7F", "#5E5C57",
  ];

  return (
    <div className="space-y-6 px-2">
      <div className="flex items-center justify-between">
        <label htmlFor="curtin-select" className="font-medium text-gray-700">
          Select Curtin Panel
        </label>
        <select
          id="curtin-select"
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Array.from({ length: 23 }, (_, i) => (
            <option key={i} value={i}>
              Curtin {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">Choose a Color:</p>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
          {curtinColors.map((code, i) => (
            <button
              key={i}
              onClick={() => updateCurtinColor(selectedIndex, code)}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-300 hover:border-blue-500 shadow-sm transition-all"
              style={{ backgroundColor: code }}
              title={code}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurtinPicker;