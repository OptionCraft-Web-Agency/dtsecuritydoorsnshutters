import { useState, useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Check if ctx is not null

    // Function to resize the canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Call resizeCanvas to set the initial size
    resizeCanvas();

    // Load base image - Assuming untitled.png is in the public directory
    const baseImage = new Image();
    baseImage.src = "/Vis/House.png"; // Path to the base image of the house
    baseImage.onload = () => {
      resizeCanvas(); // Ensure canvas is resized before drawing
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    };

    // Load mask image - Assuming wall.png is in the public directory
    const maskImage = new Image();
    maskImage.src = "/Vis/Section/Roof/roof.png";

    const applyColor = () => {
      if (!ctx) return;

      // Create an off-screen canvas
      const offScreenCanvas = document.createElement("canvas");
      const offCtx = offScreenCanvas.getContext("2d");
      if (!offCtx) return; // Check if offCtx is not null

      // Set the off-screen canvas dimensions
      offScreenCanvas.width = canvas.width;
      offScreenCanvas.height = canvas.height;

      // Draw the mask onto the off-screen canvas
      offCtx.drawImage(
        maskImage,
        0,
        0,
        offScreenCanvas.width,
        offScreenCanvas.height
      );

      // Apply the color to the off-screen canvas using 'source-in'
      offCtx.globalCompositeOperation = "source-in";
      offCtx.fillStyle = color;
      offCtx.fillRect(0, 0, offScreenCanvas.width, offScreenCanvas.height);

      // Clear the main canvas and draw the base image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

      // Now draw the colored mask from the off-screen canvas onto the main canvas
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(offScreenCanvas, 0, 0);

      // Clean up: Dispose of the off-screen canvas if you won't use it again
      offScreenCanvas.remove();
    };

    // Attach resize event listener
    window.addEventListener("resize", resizeCanvas);

    // Call applyColor once the mask image is loaded
    maskImage.onload = applyColor;

    // Cleanup resize event listener
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [color]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Color Customizer</h1>
      <canvas ref={canvasRef}></canvas> {/* Removed fixed width/height */}
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="mt-3"
      />
    </div>
  );
}
