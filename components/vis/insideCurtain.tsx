import React, { useRef, useEffect } from "react";

type CanvasComponentProps = {
  width: number;
  height: number;
};

const InsideCurtain: React.FC<CanvasComponentProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const houseImage = new Image();
    houseImage.src = "/Vis/roller/underCurtain.png";
    houseImage.onload = () => {
      // Adjust canvas to image size
      canvas.width = houseImage.width;
      canvas.height = houseImage.height;

      // Draw the image onto the canvas
      context.drawImage(houseImage, 0, 0);
    };
    houseImage.onerror = () => console.error("Error loading house image");

    const resizeCanvas = () => {
      let aspectRatio = 13 / 9;

      if (window.innerWidth > 1026) {
        // Using optional chaining and providing default values
        const parentWidth =
          canvas.parentElement?.offsetWidth || window.innerWidth;
        const parentHeight =
          canvas.parentElement?.offsetHeight || window.innerHeight;

        canvas.width = parentWidth;
        canvas.height = parentHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerWidth / aspectRatio;
        if (canvas.height > window.innerHeight) {
          canvas.height = window.innerHeight;
          canvas.width = canvas.height * aspectRatio;
        }
      }
    };

    // Initial resize and color application
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [width, height]);

  return (
    <div className="w-full h-full top-0 left-0 absolute">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default InsideCurtain;
