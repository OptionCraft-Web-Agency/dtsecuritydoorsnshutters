import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define your types for props
type Attribute = {
  name: string;
  value: string;
};

type Variation = {
  id: string;
  price: string;
  attributes: {
    nodes: Array<Attribute>;
  };
  image: {
    sourceUrl: string;
  };
};

type ProductProps = {
  product: {
    id: string;
    name: string;
    description: string;
    variations: {
      nodes: Array<Variation>;
    };
    defaultAttributes: {
      nodes: Array<Attribute>;
    };
    attributes: {
      nodes: Array<{
        name: string;
        options: Array<string>;
      }>;
    };
  };
};

const ProductDetails: React.FC<ProductProps> = ({ product }) => {
  // State for selected attributes
  const [selectedAttributes, setSelectedAttributes] = useState<
    Record<string, string>
  >({});

  // Effect hook to set the default attributes when the component mounts
  useEffect(() => {
    const defaultAttributes = product.defaultAttributes.nodes.reduce(
      (acc, attribute) => {
        acc[attribute.name] = attribute.value;
        return acc;
      },
      {} as Record<string, string>
    );

    setSelectedAttributes(defaultAttributes);
  }, [product.defaultAttributes]);

  // Find the selected variation based on the selected attributes
  const selectedVariation = product.variations.nodes.find((variation) =>
    Object.entries(selectedAttributes).every(([name, value]) =>
      variation.attributes.nodes.some(
        (attr) => attr.name === name && attr.value === value
      )
    )
  );

  // Event handler for when an attribute is selected
  const handleSelectAttribute = (attrName: string, value: string) => {
    setSelectedAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attrName]: value,
    }));
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />

      <div className="md:flex">
        <div className="md:w-1/2">
          {/* Image component */}
          <Image
            src={
              selectedVariation?.image.sourceUrl ||
              product.variations.nodes[0].image.sourceUrl
            }
            alt={`Image of ${product.name}`}
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          {/* Render options */}
          {product.attributes.nodes.map((attribute) => (
            <div key={attribute.name} className="mb-4">
              <h3 className="text-xl font-semibold capitalize">
                {attribute.name}
              </h3>
              <div className="flex flex-wrap -m-1">
                {attribute.options.map((option) => (
                  <button
                    key={option}
                    className={`m-1 px-4 py-2 border rounded ${
                      selectedAttributes[attribute.name] === option
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                    onClick={() =>
                      handleSelectAttribute(attribute.name, option)
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Render price */}
          <p className="text-2xl font-bold mt-4">
            Price:{" "}
            {selectedVariation ? selectedVariation.price : "Select options"}
          </p>

          {/* Add to cart button */}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
