import React from "react";

interface Color {
  name: string;
  code: string;
}

interface ColorPickerSectionProps {
  selectedSection: string;
  data: Record<string, Color[]>;
  handleSelection: (section: string, color: Color) => void;
}

const ColorPickerSection: React.FC<ColorPickerSectionProps> = ({
  selectedSection,
  data,
  handleSelection,
}) => {
  const colors = data[selectedSection] || [];

  return (
    <div className="my-6">
      <h4 className="text-lg font-semibold text-center mb-4">{selectedSection}</h4>
      <div className="flex flex-wrap gap-4 justify-center">
        {colors.map((color, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <button
              onClick={() => handleSelection(selectedSection, color)}
              className="w-16 h-16 rounded-full border border-gray-300 shadow cursor-pointer"
              style={{ backgroundColor: color.code }}
            />
            <span className="text-sm text-center mt-1 text-gray-700">{color.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPickerSection;