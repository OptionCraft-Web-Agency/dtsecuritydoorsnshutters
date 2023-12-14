import React, { useRef, useEffect } from "react";

type CanvasComponentProps = {
  door: string;
  facia: string;
  frontWall: string;
  left: string;
  lowerRoof: string;
  pillars: string;
  right: string;
  roof: string;
  width: number;
  height: number;
};

const CanvasComponent: React.FC<CanvasComponentProps> = ({
  door,
  facia,
  frontWall,
  left,
  lowerRoof,
  pillars,
  right,
  roof,
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

    const Tom = {
      door: { color: door, src: "/Vis/Tom/door.png" },
      Facia: { color: facia, src: "/Vis/Tom/facia.png" },
      frontWall: {
        color: frontWall,
        src: "/Vis/Tom/frontWall.png",
      },

      pillars: { color: pillars, src: "/Vis/Tom/pillars.png" },
      right: { color: right, src: "/Vis/Tom/right.png" },
      lowerRoof: { color: lowerRoof, src: "/Vis/Tom/lowerRoof.png" },
      left: { color: left, src: "/Vis/Tom/left.png" },
      roof: { color: roof, src: "/Vis/Tom/roof.png" },
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
      Object.values(Tom).forEach((mask) => applyColor(mask.color, mask.src));
    };

    houseImage.onload = applyAllColors;
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

      applyAllColors();
    };

    // Initial resize and color application
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [
    door,
    facia,
    frontWall,
    left,
    lowerRoof,
    pillars,
    right,
    roof,
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
