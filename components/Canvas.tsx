import React, { useRef, useEffect } from "react";

type CanvasComponentProps = {
  mainRoofColor: string;
  lowerRoofColor: string;
  leftDWallColor: string;
  leftWallColor: string;
  pillarsColor: string;
  pillarsBaseColor: string;
  rightDWallColor: string;
  rightWallColor: string;
  width: number;
  height: number;
};

const CanvasComponent: React.FC<CanvasComponentProps> = ({
  mainRoofColor,
  lowerRoofColor,
  leftDWallColor,
  leftWallColor,
  pillarsColor,
  pillarsBaseColor,
  rightDWallColor,
  rightWallColor,
  width,
  height,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const houseImage = new Image();
    houseImage.src = "/Vis/houseMain.png";

    const masks = {
      mainRoof: { color: mainRoofColor, src: "/Vis/Mask/MainRoof.png" },
      lowerRoof: { color: lowerRoofColor, src: "/Vis/Mask/LowerRoof.png" },
      leftDWall: { color: leftDWallColor, src: "/Vis/Mask/LeftDWall.png" },
      leftWall: { color: leftWallColor, src: "/Vis/Mask/LeftWall.png" },
      pillars: { color: pillarsColor, src: "/Vis/Mask/Pillars.png" },
      pillarsBase: {
        color: pillarsBaseColor,
        src: "/Vis/Mask/PillarsBase.png",
      },
      rightDWall: { color: rightDWallColor, src: "/Vis/Mask/RightDWall.png" },
      rightWall: { color: rightWallColor, src: "/Vis/Mask/RightWall.png" },
    };

    const applyColor = (color: string, maskSrc: string) => {
      const offScreenCanvas = document.createElement("canvas");
      const offCtx = offScreenCanvas.getContext("2d");
      if (!offCtx) return;

      offScreenCanvas.width = canvas.width;
      offScreenCanvas.height = canvas.height;

      const maskImage = new Image();
      maskImage.src = maskSrc;
      maskImage.onload = () => {
        offCtx.drawImage(
          maskImage,
          0,
          0,
          offScreenCanvas.width,
          offScreenCanvas.height
        );
        offCtx.globalCompositeOperation = "multiply";
        offCtx.fillStyle = color;
        offCtx.fillRect(0, 0, offScreenCanvas.width, offScreenCanvas.height);

        offCtx.globalCompositeOperation = "destination-in";
        offCtx.drawImage(
          maskImage,
          0,
          0,
          offScreenCanvas.width,
          offScreenCanvas.height
        );

        context.drawImage(offScreenCanvas, 0, 0);
        offScreenCanvas.remove();
      };
    };

    const applyAllColors = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(houseImage, 0, 0, canvas.width, canvas.height);
      Object.values(masks).forEach((mask) => applyColor(mask.color, mask.src));
    };

    houseImage.onload = applyAllColors;
    houseImage.onerror = () => console.error("Error loading house image");

    const resizeCanvas = () => {
      const aspectRatio = 13 / 9;
      canvas.width = window.innerWidth;
      canvas.height = window.innerWidth / aspectRatio;
      if (canvas.height > window.innerHeight) {
        canvas.height = window.innerHeight;
        canvas.width = canvas.height * aspectRatio;
      }
      applyAllColors();
    };

    // Initial resize and color application
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [
    mainRoofColor,
    lowerRoofColor,
    leftDWallColor,
    leftWallColor,
    pillarsColor,
    pillarsBaseColor,
    rightDWallColor,
    rightWallColor,
    width,
    height,
  ]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          // additional styling for your animation
        }}
      >
        {/* Animation content here */}
      </div>
    </div>
  );
};

export default CanvasComponent;
