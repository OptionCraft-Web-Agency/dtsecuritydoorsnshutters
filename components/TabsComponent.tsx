import React from "react";
import {
  ColorOption,
  CategoryDetails as CategoryDetailsType,
  categoryDetails,
} from "@/data/CurtinData";

type TabsComponentProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  tabColors: { [key: string]: ColorOption[] };
  onSelectCategory: (category: CategoryDetailsType) => void;
};

const TabsComponent: React.FC<TabsComponentProps> = ({
  activeTab,
  setActiveTab,
  tabColors,
  onSelectCategory,
}) => {
  return (
    <div className="overflow-x-auto pb-2 border-b">
      <ul className="flex space-x-6 whitespace-nowrap px-2 sm:px-0">
        {Object.keys(tabColors).map((tab) => (
          <li
            key={tab}
            className={`px-4 py-2 font-medium cursor-pointer border-b-2 transition-colors duration-200 ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => {
              setActiveTab(tab);
              onSelectCategory(categoryDetails[tab]);
            }}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsComponent;