import React, { useRef, useEffect } from "react";

type CanvasComponentProps = {
  roofColor: string;
  width: number;
  height: number;
};

const CanvasComponent: React.FC<CanvasComponentProps> = ({
  roofColor,
  width,
  height,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvas.getContext) {
      const context = canvas.getContext("2d");
      if (context) {
        const houseImage = new Image();
        const roofMask = new Image();

        houseImage.src = "/Vis/houseMain.png";
        roofMask.src = "/Vis/Mask/Mask.png";

        const drawImageScaled = (
          img: HTMLImageElement,
          ctx: CanvasRenderingContext2D
        ) => {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
        };

        const applyRoofColor = () => {
          const offScreenCanvas = document.createElement("canvas");
          const offCtx = offScreenCanvas.getContext("2d");
          if (!offCtx) return;

          offScreenCanvas.width = canvas.width;
          offScreenCanvas.height = canvas.height;

          // Draw the mask onto the off-screen canvas
          offCtx.drawImage(
            roofMask,
            0,
            0,
            offScreenCanvas.width,
            offScreenCanvas.height
          );
          // Set the blending mode to 'multiply' to blend the color with the mask
          offCtx.globalCompositeOperation = "multiply";
          offCtx.fillStyle = roofColor;
          offCtx.fillRect(0, 0, offScreenCanvas.width, offScreenCanvas.height);

          // Reset the composite operation to 'destination-in' to retain the mask shape
          offCtx.globalCompositeOperation = "destination-in";
          offCtx.drawImage(
            roofMask,
            0,
            0,
            offScreenCanvas.width,
            offScreenCanvas.height
          );

          // Clear the main canvas and draw the house image
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(houseImage, 0, 0, canvas.width, canvas.height);

          // Draw the off-screen canvas onto the main canvas using 'source-over'
          // This will draw the blended mask over the house image
          context.globalCompositeOperation = "source-over";
          context.drawImage(offScreenCanvas, 0, 0);

          // Clean up:
          offScreenCanvas.remove();
        };

        // Resize the canvas to fill the window and maintain aspect ratio
        const resizeCanvas = () => {
          const aspectRatio = width / height;
          canvas.width = window.innerWidth;
          canvas.height = window.innerWidth / aspectRatio;
          if (canvas.height > window.innerHeight) {
            canvas.height = window.innerHeight;
            canvas.width = canvas.height * aspectRatio;
          }
          applyRoofColor();
        };

        // Add resize listener
        window.addEventListener("resize", resizeCanvas);

        // Load images and apply color
        houseImage.onload = resizeCanvas;
        roofMask.onload = applyRoofColor;

        // Error handling
        houseImage.onerror = () => console.error("Error loading house image");
        roofMask.onerror = () => console.error("Error loading roof mask image");

        // Cleanup
        return () => {
          window.removeEventListener("resize", resizeCanvas);
        };
      }
    }
  }, [roofColor, width, height]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default CanvasComponent;
