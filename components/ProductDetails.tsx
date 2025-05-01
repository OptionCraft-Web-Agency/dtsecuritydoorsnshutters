"use client";

import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

type ImageType = { sourceUrl: string };
type Color = { name: string; hex: string };
type ProductProps = {
  product: {
    id: string;
    name: string;
    description: string;
    content: string[];
    image: ImageType[];
    color: Color[];
    width: string[];
    height: string[];
    DVA: string[];
    DVAColor: Color[];
  };
};

const ProductDetails: React.FC<ProductProps> = ({ product }) => {
  const [selectedColorName, setSelectedColorName] = useState(product.color[0].name);
  const [selectedWidth, setSelectedWidth] = useState(product.width[0]);
  const [selectedHeight, setSelectedHeight] = useState(product.height[0]);
  const [selectedDVA, setSelectedDVA] = useState(product.DVA[0]);
  const [selectedDVAColorName, setSelectedDVAColorName] = useState(product.DVAColor[0].name);

  const copyToClipboard = async () => {
    const details = `
      Name: ${product.name}
      Product ID: ${product.id}
      Link: ${window.location.href}
      Color: ${selectedColorName}
      Width: ${selectedWidth}
      Height: ${selectedHeight}
      DVA: ${selectedDVA}
      DVA Color: ${selectedDVAColorName}
    `;
    try {
      await navigator.clipboard.writeText(details);
      alert("Copied to clipboard. Please send us the details via messenger.");
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const renderColorOptions = (colors: Color[], selected: string, setSelected: (val: string) => void) => (
    <div className="flex flex-wrap gap-1">
      {colors.map((color) => (
        <button
          key={color.name}
          className={`w-8 h-8 rounded border ${selected === color.name ? "border-blue-600" : "border-gray-300"}`}
          style={{ backgroundColor: color.hex }}
          onClick={() => setSelected(color.name)}
          title={color.name}
        />
      ))}
    </div>
  );

  const renderOptions = (options: string[], selected: string, setSelected: (val: string) => void) => (
    <div className="flex flex-wrap gap-1">
      {options.map((option) => (
        <button
          key={option}
          className={`px-2 py-1 text-xs rounded border ${
            selected === option ? "bg-blue-500 text-white" : "bg-white text-gray-800 border-gray-300"
          }`}
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto my-6 px-2 md:px-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Gallery Section */}
        <div className="w-full md:w-1/2 h-[620px] rounded overflow-hidden">
          <Slide autoplay={false} arrows={true} duration={4000}>
            {product.image.map((img, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-[480px] bg-white px-4"
              >
                <img
                  src={img.sourceUrl}
                  alt={`Slide ${idx + 1}`}
                  className="object-contain max-h-[500px] max-w-[100%]"
                />
              </div>
            ))}
          </Slide>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 md:h-[620px] overflow-y-auto flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h1 className="text-xl font-semibold text-gray-800">{product.name}</h1>
            <button
              onClick={copyToClipboard}
              className="mt-2 sm:mt-0 text-xs bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700"
            >
              Copy
            </button>
          </div>

          <div
            className="text-sm text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          <div className="bg-gray-50 border p-3 rounded text-xs space-y-1">
            <p><strong>✔</strong> Complimentary Installation</p>
            <p><strong>✔</strong> Premium Austral Lock</p>
            <p><strong>✔</strong> Door Closer & Bug Strip</p>
            <p><strong>✔</strong> Tailored Sizes</p>
            <p><strong>✔</strong> Flyscreen Included</p>
          </div>

          <div>
            <h2 className="text-sm font-medium mb-1">Color: {selectedColorName}</h2>
            {renderColorOptions(product.color, selectedColorName, setSelectedColorName)}
          </div>

          <div>
            <h2 className="text-sm font-medium mb-1">Door Width</h2>
            {renderOptions(product.width, selectedWidth, setSelectedWidth)}
          </div>

          <div>
            <h2 className="text-sm font-medium mb-1">Door Height</h2>
            {renderOptions(product.height, selectedHeight, setSelectedHeight)}
          </div>

          <div>
            <h2 className="text-sm font-medium mb-1">Privacy Mesh (DVA) Required?</h2>
            {renderOptions(product.DVA, selectedDVA, setSelectedDVA)}
          </div>

          <div>
            <h2 className="text-sm font-medium mb-1">DVA Color</h2>
            {renderColorOptions(product.DVAColor, selectedDVAColorName, setSelectedDVAColorName)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;