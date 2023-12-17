import { useState } from "react";

// First, define a type for your selection object

type Selection = {
  id: number;
  unit: "mm" | "cm" | "m";
  product: string;
  width: number;
  height: number;
  operationType: string;
  location: string;
  cost: number;
};

// Sample product list with prices
const products = [
  { name: "Residential Shutter", price: 100 }, // Base price per 10m^2
  { name: "Commercial Shutter", price: 150 },
  // ... add more products as needed
];

// Operation types
const operationTypes = ["Manual", "Electric 240V Motor", "Battery"];

// Location options
const locations = ["Ground Floor", "First Floor", "Second Floor"];

// Function to calculate area cost
const calculateAreaCost = (
  width: number,
  height: number,
  unit: "mm" | "cm" | "m"
): number => {
  let area; // Area in square meters
  switch (unit) {
    case "mm":
      area = (width / 1000) * (height / 1000);
      break;
    case "cm":
      area = (width / 100) * (height / 100);
      break;
    case "m":
      area = width * height;
      break;
  }
  return Math.ceil(area / 10) * 100; // Cost for each 10m^2
};

// Function to calculate additional floor charge
const calculateFloorCharge = (location: string): number => {
  if (location !== "Ground Floor") {
    return 500; // Extra charge for each floor up
  }
  return 0;
};

const calculateCost = (selections: Selection[]): number => {
  return selections.reduce((total, selection) => {
    const productPrice =
      products.find((product) => product.name === selection.product)?.price ||
      0;
    const areaCost = calculateAreaCost(
      selection.width,
      selection.height,
      selection.unit
    );
    const floorCharge = calculateFloorCharge(selection.location);
    return total + (areaCost + floorCharge + productPrice);
  }, 0);
};

export default function CostCalc() {
  const [selections, setSelections] = useState<Selection[]>([
    {
      id: 1,
      unit: "m",
      product: products[0].name,
      width: 0,
      height: 0,
      operationType: operationTypes[0],
      location: locations[0],
      cost: 0,
    },
  ]);

  // ... other functions such as addSelection, updateSelection, handleInputChange
  const addSelection = () => {
    // Create a new selection with default values and a unique ID
    const newSelection: Selection = {
      id: selections.length + 1, // Assuming IDs are simply incremental
      unit: "m", // Default unit
      product: products[0].name, // Default product, assuming there's at least one product
      width: 1, // Default width
      height: 1, // Default height
      operationType: operationTypes[0], // Default operation type, assuming there's at least one
      location: locations[0], // Default location, assuming there's at least one
      cost: 0, // This will be calculated, so it's initialized to 0
    };

    // Update the state to include the new selection
    setSelections(selections.concat(newSelection));
  };

  const handleInputChange = (
    id: number,
    field: keyof Selection,
    value: string | number
  ) => {
    // Update the selections with the new value
    setSelections(
      selections.map((selection) => {
        if (selection.id === id) {
          // Parse the number inputs from string to number
          if (field === "width" || field === "height" || field === "cost") {
            value = Number(value);
          }
          return { ...selection, [field]: value };
        }
        return selection;
      })
    );
  };

  const totalCost = calculateCost(selections);
  return (
    <div className="bg-yellow-200 px-4 py-2">
      <div className="overflow-x-auto">
        {selections.map((selection) => (
          <div key={selection.id} className="mb-4">
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-3 rounded shadow">
              <div className="flex flex-col md:flex-row md:flex-1 items-center mb-2 md:mb-0 space-y-2 md:space-y-0 md:space-x-2">
                <div className="font-bold text-gray-700">{selection.id}</div>
                <div className="flex space-x-2">
                  <select
                    className="p-1 bg-yellow-100 border border-yellow-300"
                    value={selection.unit}
                    onChange={(e) =>
                      handleInputChange(selection.id, "unit", e.target.value)
                    }
                  >
                    {/* Options for units */}
                  </select>
                  <select
                    className="p-1 bg-yellow-100 border border-yellow-300"
                    value={selection.product}
                    onChange={(e) =>
                      handleInputChange(selection.id, "product", e.target.value)
                    }
                  >
                    {/* Options for products */}
                  </select>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    className="p-1 bg-yellow-100 border border-yellow-300"
                    placeholder="Width"
                    value={selection.width}
                    onChange={(e) =>
                      handleInputChange(selection.id, "width", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    className="p-1 bg-yellow-100 border border-yellow-300"
                    placeholder="Height"
                    value={selection.height}
                    onChange={(e) =>
                      handleInputChange(selection.id, "height", e.target.value)
                    }
                  />
                </div>
                <div className="flex space-x-2">
                  <select
                    className="p-1 bg-yellow-100 border border-yellow-300"
                    value={selection.operationType}
                    onChange={(e) =>
                      handleInputChange(
                        selection.id,
                        "operationType",
                        e.target.value
                      )
                    }
                  >
                    {/* Options for operation types */}
                  </select>
                  <select
                    className="p-1 bg-yellow-100 border border-yellow-300"
                    value={selection.location}
                    onChange={(e) =>
                      handleInputChange(
                        selection.id,
                        "location",
                        e.target.value
                      )
                    }
                  >
                    {/* Options for locations */}
                  </select>
                </div>
              </div>
              <div className="md:ml-4 flex items-center justify-end md:flex-1">
                <span className="text-red-600 font-bold">
                  RRP: ${selection.cost}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <button
            className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded"
            onClick={addSelection}
          >
            + ADD MORE SHUTTERS
          </button>
        </div>
        <div className="text-right font-bold text-lg mt-6">
          Total Cost: ${calculateCost(selections)}
        </div>
      </div>
    </div>
  );
}
