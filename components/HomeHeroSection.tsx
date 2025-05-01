import React from "react";
import { useRouter } from "next/router";

const HomeHeroSection: React.FC = () => {
  const router = useRouter();

  const navigateToServices = () => {
    router.push("/Services");
  };

  const navigateToContact = () => {
    router.push("/ContactUs");
  };

  return (
    <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/RollerDoor3.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-blue-900/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
            Secure Your Home with Premium Doors & Shutters
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Trusted protection and stylish designs tailored to your Melbourne home.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={navigateToServices}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transition-all duration-300"
            >
              Explore Our Products
            </button>
            <button
              onClick={navigateToContact}
              className="px-8 py-3 bg-white text-blue-700 border border-blue-600 hover:bg-blue-50 font-semibold rounded-md shadow-lg transition-all duration-300"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;