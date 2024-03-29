import React, { useState, useEffect, CSSProperties } from "react";

const ContactUsForm: React.FC = () => {
  // Initialize state without a value as it's unknown at server-side
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
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
    // Submit form data
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Reset form or show success message
      alert("Your message has been sent successfully!");
      // Optionally reset form state here
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    } else {
      // Handle error
      alert("There was an error sending your message. Please try again.");
    }
  };
  useEffect(() => {
    // Now that we are client-side, set the state based on window width
    setIsMobile(window.innerWidth < 600);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle: CSSProperties = {
    height: isMobile ? "auto" : "50vw",
    width: "100%",
    backgroundImage: "url(/RollerDoor2.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: isMobile ? "90%" : "80vh",
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    marginBottom: isMobile ? "4%" : "2vw",
    padding: isMobile ? "3%" : "0.5vw",
    borderRadius: "5px",
    border: "1px solid black",
    fontSize: isMobile ? "4vw" : "1.5vw",
  };

  const buttonStyle: CSSProperties = {
    padding: isMobile ? "2%" : "1vw",
    border: "none",
    borderRadius: "5px",
    color: "white",
    fontSize: isMobile ? "5vw" : "1.5vw",
    cursor: "pointer",
    backgroundColor: "rgba(0, 87, 255)",
    boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
    transition: "background-color 0.3s, transform 0.3s",
    width: "100%",
  };

  const hoverButtonStyle: CSSProperties = {
    ...buttonStyle,
    backgroundColor: "rgba(0, 77, 255)",
    transform: "scale(1.05)",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <p
          style={{
            fontSize: isMobile ? "6vw" : "2.5rem",
            margin: "1rem 0",
            fontWeight: "bold",
          }}
        >
          Enquire Form
        </p>

        <form style={formStyle} onSubmit={handleSubmit}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "min(1.5vw, 16px)",
            }}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              style={inputStyle}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              style={inputStyle}
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "min(1.5vw, 16px)",
            }}
          >
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              style={inputStyle}
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="address"
              id="address"
              name="address"
              placeholder="Address"
              style={inputStyle}
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            style={inputStyle}
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.cssText = Object.entries(hoverButtonStyle)
                .map(
                  ([key, value]) =>
                    `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value}`
                )
                .join(";"))
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.cssText = Object.entries(buttonStyle)
                .map(
                  ([key, value]) =>
                    `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value}`
                )
                .join(";"))
            }
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
