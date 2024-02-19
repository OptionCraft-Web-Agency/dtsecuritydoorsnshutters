import React from 'react';
import Image from 'next/image';

const HomeContent: React.FC = () => {

    const navigateToServices = () => {
        window.location.href = '/Services'; 
    };

    const navigateToContacts = () => {
        window.location.href = '/ContactUs'; 
    };

    const buttonStyle: React.CSSProperties = {
        borderRadius: '4px',
        border: '1px solid #C9E2F9',
        background: 'rgba(0, 87, 255)',
        boxShadow: '2px 2px 4px 0px rgba(22, 110, 187, 0.32)',
        color: '#FFF',
        fontSize: '1vw',
        padding: '1vw',
        textTransform: 'capitalize',
        transition: 'all 0.3s ease-in-out', // Transition for smooth hover effect
        cursor: 'pointer',
    };

    const buttonHoverStyle: React.CSSProperties = {
        ...buttonStyle,
        background: 'rgba(0, 44, 128)', // Darker shade on hover
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Different shadow on hover
    };

    const applyHoverStyle = (e: React.MouseEvent<HTMLButtonElement>, hoverStyle: React.CSSProperties) => {
        Object.assign(e.currentTarget.style, hoverStyle);
    };

    const removeHoverStyle = (e: React.MouseEvent<HTMLButtonElement>, defaultStyle: React.CSSProperties) => {
        Object.assign(e.currentTarget.style, defaultStyle);
    };

    const secondButtonStyle: React.CSSProperties = {
        ...buttonStyle,
        background: 'white',
        color: 'rgba(0, 87, 255)',
        border: '1px solid rgba(0, 87, 255)',
    };

    const secondButtonHoverStyle: React.CSSProperties = {
        ...secondButtonStyle,
        background: 'rgba(0, 87, 255)',
        color: '#FFF',
        border: '1px solid #C9E2F9',
    };

  return (
    <div
        style={{
            display: "flex",
            flexDirection: "row",
            height: "100vh",
        }}
    >
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
                width: "50%",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1rem",
                }}
            >
                <p
                    style={{
                        fontSize: "2vw",
                        textAlign: "left",
                        padding: "10px 0px",
                        fontWeight: "bold",
                    }}
                >
                    Elevate Your Home with DT Security Doors & Shutters
                </p>
                <p
                    style={{
                        fontSize: "1vw",
                        textAlign: "left",
                        padding: "5px 0px",
                    }}
                >
                    Experience custom-designed elegance that complements your personal style.
                </p>
                <p
                    style={{
                        fontSize: "1vw",
                        textAlign: "left",
                        padding: "5px 0px",
                    }}
                >
                    Rely on our robust and durable construction for unmatched home security.
                </p>
                <p
                    style={{
                        fontSize: "1vw",
                        textAlign: "left",
                        padding: "5px 0px",
                    }}
                >
                    Discover the perfect balance of aesthetic elegance and practical efficiency.
                </p>
            </div>

            <div
                style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "70%",
                padding: "1rem",
                }}
            >
                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => applyHoverStyle(e, buttonHoverStyle)}
                    onMouseLeave={(e) => removeHoverStyle(e, buttonStyle)}
                    onClick={navigateToServices}
                >
                    Discover More
                </button>

                <button
                    style={secondButtonStyle}
                    onMouseEnter={(e) => applyHoverStyle(e, secondButtonHoverStyle)}
                    onMouseLeave={(e) => removeHoverStyle(e, secondButtonStyle)}
                    onClick={navigateToContacts}
                >
                    Get in Touch
                </button>
            </div>
        </div>

        <div
            style={{
                width: "50%", // Container width
                height: "auto", // Height to fit content
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)", // Four columns
                gridTemplateRows: "repeat(5, 1fr)", // Six rows
                gap: "1vw", // Spacing between images
                padding: "1vw", // Padding around the grid
            }}
        >
            {/* Image 1 - Top left, taking up two columns and three rows */}
            <div
                style={{
                    gridColumn: "1 / span 2",
                    gridRow: "2 / span 2",
                    position: "relative", // Required for Image component with layout='fill'
                    width: "100%", // Full width of the grid area
                    height: "100%", // Full height of the grid area
                }}
            >
                <Image
                    src="/RollerDoor1.jpg"
                    alt="Outdoor Blinds"
                    layout="fill" // The image will fill the dimensions of the parent div
                    objectFit="cover" // The image will cover the area, like background-size: cover
                />
            </div>

            {/* Image 2 - Top right, taking up two columns and two rows */}
            <div
                style={{
                    gridColumn: "3 / span 2",
                    gridRow: "1 / span 2",
                    position: "relative", // Needed for layout="fill"
                }}
            >
                <Image
                    src="/Blinds1.jpg"
                    alt="Stylish Blinds"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Image 3 - Middle right, taking up two columns and two rows, starting from the third row */}
            <div
                style={{
                    gridColumn: "3 / span 2",
                    gridRow: "3 / span 2",
                    position: "relative",
                }}
            >
                <Image
                    src="/SecurityDoor1.jpg"
                    alt="Elegant Security Doors"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Image 4 - Bottom left, taking up two columns and two rows */}
            <div
                style={{
                    gridColumn: "1 / span 2",
                    gridRow: "4 / span 2",
                    position: "relative",
                }}
            >
                <Image
                    src="/Window1.jpg"
                    alt="Modern Windows"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    </div>
  );
};

export default HomeContent;
