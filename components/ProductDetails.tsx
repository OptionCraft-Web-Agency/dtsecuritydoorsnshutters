import React, { useState, useEffect } from "react";
import Image from "next/image";

// Types for props
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

const normalizeAttributeName = (name: string) =>
  name.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");

const ProductDetails: React.FC<ProductProps> = ({ product }) => {
  const [selectedAttributes, setSelectedAttributes] = useState<
    Record<string, string>
  >({});
  const [selectedVariation, setSelectedVariation] = useState<Variation | null>(
    null
  );

  // Set default attributes and find matching variation on mount and when product changes
  useEffect(() => {
    const defaultAttrValues = getDefaultAttributeValues();
    setSelectedAttributes(defaultAttrValues);
    findAndSetMatchingVariation(defaultAttrValues);
  }, [product]); // Dependency on product to update if it changes

  const getDefaultAttributeValues = () => {
    return product.defaultAttributes.nodes.reduce((defaults, attr) => {
      defaults[normalizeAttributeName(attr.name)] = attr.value;
      return defaults;
    }, {} as Record<string, string>);
  };

  const findAndSetMatchingVariation = (attributes: Record<string, string>) => {
    const matchingVariation = findMatchingVariation(attributes);
    setSelectedVariation(matchingVariation);
  };

  const findMatchingVariation = (attributes: Record<string, string>) => {
    // Normalize the attributes to ensure a case-insensitive match
    const normalizedSelectedAttributes = Object.keys(attributes).reduce(
      (acc, key) => {
        acc[normalizeAttributeName(key)] = attributes[key];
        return acc;
      },
      {}
    );

    return (
      product.variations.nodes.find((variation) => {
        // Check if all attributes in a variation match the selected attributes
        return variation.attributes.nodes.every((variationAttr) => {
          const normalizedVariationAttrName = normalizeAttributeName(
            variationAttr.name
          );
          // If the variation attribute is empty, it matches any value (wildcard).
          if (variationAttr.value === "") return true;
          // If the attribute is 'privacy-mesh-dva-required', ensure it matches exactly.
          if (normalizedVariationAttrName === "privacy-mesh-dva-required") {
            return (
              normalizedSelectedAttributes[normalizedVariationAttrName] ===
              variationAttr.value
            );
          }
          // For other attributes, match normally.
          return (
            normalizedSelectedAttributes[normalizedVariationAttrName] ===
            variationAttr.value
          );
        });
      }) || null
    ); // Return null if no matching variation is found
  };

  const handleSelectAttribute = (name: string, value: string) => {
    const normalizedAttrName = normalizeAttributeName(name);
    const updatedAttributes = {
      ...selectedAttributes,
      [normalizedAttrName]: value,
    };

    setSelectedAttributes(updatedAttributes);
    findAndSetMatchingVariation(updatedAttributes);
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />

      <div className="md:flex">
        <div className="md:w-1/2">
          <Image
            src={
              selectedVariation?.image.sourceUrl ||
              product.variations.nodes[0]?.image.sourceUrl ||
              "/default-image.jpg" // Fallback for a default image if neither is available
            }
            alt={`Image of ${product.name}`}
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
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
                      selectedAttributes[
                        normalizeAttributeName(attribute.name)
                      ] === option
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
          <p className="text-2xl font-bold mt-4">
            Price:{" "}
            {selectedVariation ? selectedVariation.price : "Select options"}
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
