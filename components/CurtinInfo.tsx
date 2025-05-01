import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ColorOption } from "@/data/CurtinData";

type ProductInfoProps = {
  colorOptions: ColorOption[];
  onColorOptionSelect: (colorOption: ColorOption) => void;
  selectedColorOption: ColorOption | null;
};

const CurtinInfo: React.FC<ProductInfoProps> = ({
  colorOptions,
  onColorOptionSelect,
  selectedColorOption,
}) => {
  const [selectedImage, setSelectedImage] = useState<ColorOption | null>(selectedColorOption);

  useEffect(() => {
    if (colorOptions.length > 0) {
      const defaultColor = colorOptions[0];
      setSelectedImage(defaultColor);
      onColorOptionSelect(defaultColor);
    }
  }, [colorOptions]);

  useEffect(() => {
    setSelectedImage(selectedColorOption);
  }, [selectedColorOption]);

  const handleClick = (color: ColorOption) => {
    setSelectedImage(color);
    onColorOptionSelect(color);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Scrollable Swatch Grid (Left) */}
      <div className="lg:max-h-[500px] lg:overflow-y-auto flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {colorOptions.map((color, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(color)}
              className={`flex flex-col items-center p-2 border rounded hover:ring-2 transition ${
                selectedImage?.name === color.name ? "ring-2 ring-blue-500" : "border-gray-200"
              }`}
            >
              <Image
                src={color.image}
                alt={color.name}
                width={100}
                height={100}
                className="rounded object-cover"
              />
              <span className="text-sm mt-1 text-center">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="flex-1 flex flex-col items-center justify-center">
          <Image
            src={selectedImage.image}
            alt={selectedImage.name}
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className="font-medium text-lg mt-4">{selectedImage.name}</p>
        </div>
      )}
    </div>
  );
};

export default CurtinInfo;