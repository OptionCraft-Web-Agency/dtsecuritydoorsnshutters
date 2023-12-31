import { useEffect, useState } from "react";

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

  return (
    <div className="bg-[#F0EDD4] p-4">
      <div className="overflow-x-auto">
        {selections.map((selection) => (
          <div key={selection.id} className="mb-3 p-1 rounded shadow">
            <div className="flex flex-col xl:flex-row ">
              <div className="w-full md:w-auto px-2 mb-2 flex flex-col xl:flex-row items-center justify-between xl:w-[80%] xl:w-[85%] ">
                <div className="flex flex-row   w-full justify-evenly mb-1 xl:mb-0 xl:mr-2">
                  <span className="font-bold text-gray-70 w-[20%] text-center mx-auto my-auto bg-[#8E8B82] text-yellow-100">
                    {selection.id}
                  </span>
                  <select
                    className="p-1 bg-[#F9FBE7] border border-yellow-300 w-[20%] mx-2 my-auto text-center "
                    value={selection.unit}
                    onChange={(e) =>
                      handleInputChange(selection.id, "unit", e.target.value)
                    }
                  >
                    <option value="mm">mm</option>
                    <option value="cm">cm</option>
                    <option value="m">m</option>
                  </select>
                  <select
                    className="p-1 bg-[#F9FBE7] border border-yellow-300 w-[60%] mx-auto my-auto text-center "
                    value={selection.product}
                    onChange={(e) =>
                      handleInputChange(selection.id, "product", e.target.value)
                    }
                  >
                    {" "}
                    {products.map((product) => (
                      <option key={product.name} value={product.name}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-row w-full justify-evenly mb-1  xl:mb-0 xl:mr-2">
                  <div className="w-1/2 mr-1  ">
                    <input
                      type="number"
                      className="form-input block w-full p-1 bg-[#F9FBE7] border border-yellow-300 text-center "
                      placeholder="Width"
                      value={selection.width}
                      onChange={(e) =>
                        handleInputChange(selection.id, "width", e.target.value)
                      }
                    />
                  </div>
                  <span className="my-auto invisible hidden lg:visible lg:inline">
                    x
                  </span>
                  <div className="w-1/2 ml-1">
                    <input
                      type="number"
                      className="form-input block w-full p-1 bg-[#F9FBE7] border border-yellow-300 text-center "
                      placeholder="Height"
                      value={selection.height}
                      onChange={(e) =>
                        handleInputChange(
                          selection.id,
                          "height",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full justify-evenly ">
                  <div className="w-full mr-1">
                    <select
                      className="form-select block w-full p-1 bg-[#F9FBE7] border border-yellow-300"
                      value={selection.operationType}
                      onChange={(e) =>
                        handleInputChange(
                          selection.id,
                          "operationType",
                          e.target.value
                        )
                      }
                    >
                      {operationTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full  ml-1">
                    <select
                      className="form-select block w-full p-1 bg-[#F9FBE7] border border-yellow-300"
                      value={selection.location}
                      onChange={(e) =>
                        handleInputChange(
                          selection.id,
                          "location",
                          e.target.value
                        )
                      }
                    >
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end xl:w-[15%]">
                <span className="text-[#494949] font-bold">
                  RRP: ${selection.cost}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <button
            className="text-white bg-[#DC8686] hover:bg-[#EA7659] font-bold py-2 px-4 rounded"
            onClick={addSelection}
          >
            + ADD MORE SHUTTERS
          </button>
        </div>
        <div className="text-right font-bold text-lg mt-6">
          Total Cost: ${calculateTotalCost()}
        </div>
      </div>
    </div>
  );
}
