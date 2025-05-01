"use client";

import React, { useState } from "react";

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setIsSubmitting(false);

    if (response.ok) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
      alert("Your message has been sent successfully!");
    } else {
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/RollerDoor2.png')" }}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-3xl max-w-3xl mx-auto p-8 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Enquire Form
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 text-base"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 text-base"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 text-base"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 text-base resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 mt-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;