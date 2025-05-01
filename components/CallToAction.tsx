import React from "react";
import { useRouter } from "next/router";

const CallToAction: React.FC = () => {
  const router = useRouter();

  const navigateToServices = () => {
    router.push("/Services");
  };

  const navigateToContacts = () => {
    router.push("/ContactUs");
  };

  return (
    <section className="relative w-full h-[80vh] min-h-[400px] flex items-center justify-center overflow-hidden my-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/RollerDoor2.png')" }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Secure Your Home With Us
        </h2>
        <p className="text-white text-md md:text-lg mb-8 drop-shadow-sm">
          Contact us today to schedule a consultation or ask any questions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={navigateToServices}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300"
          >
            Learn More
          </button>
          <button
            onClick={navigateToContacts}
            className="px-8 py-3 bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;