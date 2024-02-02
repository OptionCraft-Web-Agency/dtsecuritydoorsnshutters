import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
export default function CostCalc() {

  const handleDeleteSelection = (id: number) => {
    setSelections(selections.filter(selection => selection.id !== id));
  };
  
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

  const addSelection = () => {
    const newSelection: Selection = {
      id: selections.length + 1,
      unit: "m",
      product: products[0].name,
      width: 1,
      height: 1,
      operationType: operationTypes[0],
      location: locations[0],
      cost: 0,
    };
    setSelections([...selections, newSelection]);
  };

  const handleInputChange = (
    id: number,
    field: keyof Selection,
    value: string | number
  ) => {
    // Convert numeric values from the input
    const numericValue =
      field === "width" || field === "height" ? Number(value) : value;

    setSelections(
      selections.map((selection) => {
        if (selection.id === id) {
          const updatedSelection = {
            ...selection,
            [field]: numericValue,
          };

          // Immediately calculate the new cost for the updated selection
          updatedSelection.cost = calculateCostForSelection(updatedSelection);
          return updatedSelection;
        }
        return selection;
      })
    );
  };

  // Function to calculate cost for each selection
  const calculateCostForSelection = (selection: Selection): number => {
    const product = products.find((p) => p.name === selection.product);
    const basePrice = product ? product.price : 0;
    const areaCost = calculateAreaCost(
      selection.width,
      selection.height,
      selection.unit
    );
    const floorCharge = calculateFloorCharge(selection.location);

    //log everything
    console.log(selection.unit);

    console.log("basePrice", basePrice);
    console.log("areaCost", areaCost);
    console.log("floorCharge", floorCharge);

    // check if all the price >0 then calc the total
    if (basePrice > 0 && areaCost > 0 && floorCharge > 0) {
      return basePrice + areaCost + floorCharge;
    }
    return 0;
  };

  // Function to calculate area cost based on unit
  const calculateAreaCost = (
    width: number,
    height: number,
    unit: "mm" | "cm" | "m"
  ): number => {
    const conversionFactor = { mm: 0.001, cm: 0.01, m: 1 };
    const area =
      width * conversionFactor[unit] * (height * conversionFactor[unit]);
    console.log(area);

    return Math.ceil(area) * 100; // Cost for each 1m^2
  };

  // Function to calculate additional floor charge
  const calculateFloorCharge = (location: string): number => {
    if (location == "Ground Floor") {
      return 100;
    }
    if (location == "First Floor") {
      return 200;
    }
    if (location == "Second Floor") {
      return 500;
    }
    return 0;
  };

  const calculateTotalCost = (): number => {
    return selections.reduce((acc, selection) => acc + selection.cost, 0);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[rgb(179,179,179)] p-4">
      <div className="space-y-4">
        {selections.map((selection, index) => (
          <div key={selection.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-2 gap-4 mb-4 items-end">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium mb-1" style={{fontWeight:'bold'}}>Units</label>
                <select
                  className="form-select block w-full p-2 border border-gray-300 rounded-md"
                  value={selection.unit}
                  onChange={(e) => handleInputChange(selection.id, "unit", e.target.value)}
                >
                  <option value="mm">mm</option>
                  <option value="cm">cm</option>
                  <option value="m">m</option>
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium mb-1" style={{fontWeight:'bold'}}>Product</label>
                <select
                  className="form-select block w-full p-2 border border-gray-300 rounded-md"
                  value={selection.product}
                  onChange={(e) => handleInputChange(selection.id, "product", e.target.value)}
                >
                  {products.map((product) => (
                    <option key={product.name} value={product.name}>{product.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium mb-1" style={{fontWeight:'bold'}}>Width</label>
                <input
                  type="number"
                  className="form-input block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Width"
                  value={selection.width}
                  onChange={(e) => handleInputChange(selection.id, "width", e.target.value)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium mb-1" style={{fontWeight:'bold'}}>Height</label>
                <input
                  type="number"
                  className="form-input block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Height"
                  value={selection.height}
                  onChange={(e) => handleInputChange(selection.id, "height", e.target.value)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium mb-1" style={{fontWeight:'bold'}}>Operation Type</label>
                <select
                  className="form-select block w-full p-2 border border-gray-300 rounded-md"
                  value={selection.operationType}
                  onChange={(e) => handleInputChange(selection.id, "operationType", e.target.value)}
                >
                  {operationTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium mb-1" style={{fontWeight:'bold'}}>Location</label>
                <select
                  className="form-select block w-full p-2 border border-gray-300 rounded-md"
                  value={selection.location}
                  onChange={(e) => handleInputChange(selection.id, "location", e.target.value)}
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between" style={{fontWeight:'bold'}}>
              <span className="text-xl font-bold">RRP: ${selection.cost}</span>
              <button
                onClick={() => handleDeleteSelection(selection.id)}
                className="text-blue-600 hover:text-blue-800"
              >
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full"
          onClick={addSelection}
        >
          + Add More Shutters
        </button>
      </div>
      <div className="text-right font-bold text-xl mt-6">
        Total Cost: ${calculateTotalCost()}
      </div>
    </div>
  );
  
}
