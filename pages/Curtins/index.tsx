import Head from "next/head";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
const Gallery = dynamic(() => import("@/components/Gallery"));
const TabsComponent = dynamic(() => import("@/components/TabsComponent"));
const CurtinInfo = dynamic(() => import("@/components/CurtinInfo"));

import {
  categoryDetails,
  tabColors,
} from "@/data/CurtinData";
import {
  CategoryDetails as CategoryDetailsType,
  ColorOption,
} from "@/data/CurtinData";

import CurtinImage1 from "@/public/image/CurtinImage/CurtinImage1.jpg";
import CurtinImage2 from "@/public/image/CurtinImage/CurtinImage2.jpg";
import CurtinImage3 from "@/public/image/CurtinImage/CurtinImage3.jpg";
import CurtinImage4 from "@/public/image/CurtinImage/CurtinImage4.jpg";
import CurtinImage5 from "@/public/image/CurtinImage/CurtinImage5.jpg";
import CurtinImage6 from "@/public/image/CurtinImage/CurtinImage6.jpg";
import CurtinImage7 from "@/public/image/CurtinImage/CurtinImage7.jpg";
import CurtinImage8 from "@/public/image/CurtinImage/CurtinImage8.jpg";
import CurtinImage9 from "@/public/image/CurtinImage/CurtinImage9.jpg";
import CurtinImage10 from "@/public/image/CurtinImage/CurtinImage10.jpg";
import CurtinImage11 from "@/public/image/CurtinImage/CurtinImage11.jpg";
import CurtinImage12 from "@/public/image/CurtinImage/CurtinImage12.jpg";
import CurtinImage13 from "@/public/image/CurtinImage/CurtinImage13.jpg";
import CurtinImage14 from "@/public/image/CurtinImage/CurtinImage14.jpg";
import CurtinImage15 from "@/public/image/CurtinImage/CurtinImage15.jpg";
import CurtinImage16 from "@/public/image/CurtinImage/CurtinImage16.jpg";

export const images = [
  CurtinImage1,
  CurtinImage2,
  CurtinImage3,
  CurtinImage4,
  CurtinImage5,
  CurtinImage6,
  CurtinImage7,
  CurtinImage8,
  CurtinImage9,
  CurtinImage10,
  CurtinImage11,
  CurtinImage12,
  CurtinImage13,
  CurtinImage14,
  CurtinImage15,
  CurtinImage16,
];

export default function CurtinsPage() {
  const [activeTab, setActiveTab] = useState<string>("Sheerweave 4300");
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);

  const currentCategory: CategoryDetailsType =
    categoryDetails[activeTab] || {
      description: "No product description available.",
      benefits: [],
      careInstructions: "No care instructions provided.",
    };

  const currentColors: ColorOption[] = tabColors[activeTab] || [];

  return (
    <>
      <Head>
        <title>Stylish Curtains & Sheerweaves - DT Security Doors & Shutters</title>
        <meta
          name="description"
          content="Explore our wide selection of curtains and sheerweaves, designed to complement any interior with elegance and style."
        />
        <meta
          property="og:title"
          content="DT Security Doors & Shutters - Curtains Collection"
        />
        <meta
          property="og:description"
          content="Discover the latest trends in curtain designs and materials at DT Security Doors & Shutters."
        />
        <meta
          property="og:url"
          content="https://dtsecuritydoorsandshutters.com.au/Curtains"
        />
        <meta
          property="og:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
      </Head>

      <HeroSection title="Curtains" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <TabsComponent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabColors={tabColors}
          onSelectCategory={() => {
            setSelectedColor(null);
          }}
        />

        {/* Info Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{activeTab}</h2>
            <p className="text-gray-700 mb-6">{currentCategory.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {currentCategory.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Care Instructions</h3>
              <p className="text-gray-700">{currentCategory.careInstructions}</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold mb-4">Color Options</h3>
            <CurtinInfo
              colorOptions={currentColors}
              selectedColorOption={selectedColor}
              onColorOptionSelect={setSelectedColor}
            />
          </div>
        </div>
      </section>


      <Gallery images={images} />
    </>
  );
}