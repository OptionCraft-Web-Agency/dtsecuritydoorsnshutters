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

  // State for the selected variation
  const [selectedVariation, setSelectedVariation] = useState<Variation | null>(
    product.variations.nodes[0] as Variation
  );

  // Effect hook to set the default attributes when the component mounts
  useEffect(() => {
    // Convert default attribute names to a normalized format
    const defaultAttrValues = product.defaultAttributes.nodes.reduce(
      (acc, attr) => {
        const normalizedAttributeName = normalizeAttributeName(attr.name);
        acc[normalizedAttributeName] = attr.value;
        return acc;
      },
      {} as Record<string, string>
    );

    // Update the selected attributes state with default values
    setSelectedAttributes((prevAttributes) => {
      // Create a new object for selected attributes
      const newAttributes = { ...prevAttributes };

      // Iterate over the attributes nodes to set the defaults
      product.attributes.nodes.forEach((attributeNode) => {
        const normalizedAttributeName = normalizeAttributeName(
          attributeNode.name
        );
        // If the default attribute value exists, use it
        if (defaultAttrValues[normalizedAttributeName] !== undefined) {
          newAttributes[attributeNode.name] =
            defaultAttrValues[normalizedAttributeName];
        } else {
          // Otherwise, use the first option as the default
          newAttributes[attributeNode.name] = attributeNode.options[0];
        }
      });

      return newAttributes;
    });
  }, [product.defaultAttributes.nodes, product.attributes.nodes]);

  // Log the default attributes and selected variation
  console.log("Default attributes: ", selectedAttributes);

  useEffect(() => {}, [selectedAttributes, selectedVariation]);

  function normalizeAttributeName(name) {
    return name.toLowerCase().replace(/-+/g, "");
  }

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
                      selectedAttributes[attribute.name] == option
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
