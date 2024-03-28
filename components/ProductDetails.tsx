import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ImageGallery from "react-image-gallery";

// Assuming these types are defined elsewhere in your code.
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
  const [selectedColorName, setSelectedColorName] = useState<string>(
    product.color[0].name
  );
  const [selectedWidth, setSelectedWidth] = useState<string>(product.width[0]);
  const [selectedHeight, setSelectedHeight] = useState<string>(
    product.height[0]
  );
  const [selectedDVA, setSelectedDVA] = useState<string>(product.DVA[0]);
  const [selectedDVAColorName, setSelectedDVAColorName] = useState<string>(
    product.DVAColor[0].name
  );

  // Convert images for use with react-image-gallery
  const images = product.image.map((img) => {
    return {
      original: img.sourceUrl,
      thumbnail: img.sourceUrl,
    };
  });
  // Assuming you're using the first image in the array for the main display.
  const mainImageUrl =
    product.image.length > 0
      ? product.image[0].sourceUrl
      : "/default-image.jpg";
  const copyToClipboard = async () => {
    const productDetails = `
          Name: ${product.name}
          ProductID: ${product.id}
          ProductLink: ${window.location.href}
          Color: ${selectedColorName}
          Width: ${selectedWidth}
          Height: ${selectedHeight}
          Privacy Mesh (DVA) Required?: ${selectedDVA}
          DVA Color: ${selectedDVAColorName}
        `;

    try {
      await navigator.clipboard.writeText(productDetails);
      alert(
        "Entry copied to clipboard. Send us a message or use the messenger at the bottom right corner and send it to us. We will contact you shortly."
      );
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  // Function to render color selection squares
  const renderColorOptions = (colors: Color[]) => (
    <div className="flex flex-wrap">
      {colors.map((color) => (
        <button
          key={color.name}
          aria-label={`Select ${color.name}`}
          title={color.name}
          className={`m-1 w-10 h-10 border-2 ${
            selectedColorName === color.name
              ? "border-blue-500"
              : "border-gray-300"
          }`}
          style={{ backgroundColor: color.hex }}
          onClick={() => setSelectedColorName(color.name)}
        />
      ))}
    </div>
  );
  const renderOptionButtons = (
    options: string[],
    selectedOption: string,
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>
  ) => (
    <div className="flex flex-wrap">
      {options.map((option) => (
        <button
          key={option}
          className={`m-1 px-3 py-1 border rounded ${
            selectedOption === option
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 border-gray-300"
          }`}
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
  return (
    <div className="container mx-auto my-8 p-4">
      <div className="md:flex md:justify-center md:items-start mx-auto">
        {/* Container with fixed width and height */}
        <div className="w-full max-w-xs mx-auto h-[200px]">
          {/* ImageGallery component */}
          <div className="h-full w-full">
            <ImageGallery
              items={images}
              showPlayButton={false}
              additionalClass="h-full w-full"
              useBrowserFullscreen={false}
              showNav={false}
            />
          </div>
        </div>

        <div className="md:w-1/2 lg:w-2/3 md:pl-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded"
            >
              Copy to Clipboard
            </button>
          </div>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
          {/* Content section */}
          <div className="prose max-w-none pt-10">
            <div>
              <p>
                <strong>Our Standard is Others’ Extra</strong>
              </p>
              <ul>
                <li>
                  <strong>Complimentary Installation</strong>: Expert setup
                  included with every purchase.
                </li>
                <li>
                  <strong>Premium Austral Lock</strong>: Superior security comes
                  standard.
                </li>
                <li>
                  <strong>Austral Door Closer</strong>: Automatically included
                  for enhanced convenience.
                </li>
                <li>
                  <strong>Tailored to Your Needs</strong>: Custom sizing options
                  to perfectly fit your space.
                </li>
                <li>
                  <strong>Insect Screen Feature</strong>: Every door comes with
                  a Fiberglass Flyscreen, ensuring a bug-free environment.
                </li>
                <li>
                  <strong>Bug-Strip Addition</strong>: Added protection included
                  in every installation.
                </li>
              </ul>
            </div>
          </div>
          {/* Color selection */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-3">
              Color: {selectedColorName}
            </h2>
            {renderColorOptions(product.color)}
          </div>

          {/* Width selection */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-3">Door Width</h2>
            {renderOptionButtons(
              product.width,
              selectedWidth,
              setSelectedWidth
            )}
          </div>

          {/* Height selection */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-3">Door Height</h2>
            {renderOptionButtons(
              product.height,
              selectedHeight,
              setSelectedHeight
            )}
          </div>

          {/* DVA selection */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-3">
              Privacy Mesh (DVA) Required?
            </h2>
            {renderOptionButtons(product.DVA, selectedDVA, setSelectedDVA)}
          </div>

          {/* DVA Color selection */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-3">DVA Color</h2>
            {renderColorOptions(product.DVAColor)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
