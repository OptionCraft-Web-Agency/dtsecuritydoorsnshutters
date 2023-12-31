import React, { useRef, useEffect } from "react";

type RollerComponentProps = {
  bottom: string;
  rail: string;
  headBox: string;
  width: number;
  height: number;
};

const Static: React.FC<RollerComponentProps> = ({
  bottom,
  rail,
  headBox,
  width,
  height,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const base = new Image();
    base.src = "/Vis/roller/staticBase.png";

    const curtains = {
      bottom: { color: bottom, src: "/Vis/roller/Bottom.png" },
      rail: { color: rail, src: "/Vis/roller/rail.png" },
      headBox: { color: headBox, src: "/Vis/roller/headbox.png" },
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
      context.drawImage(base, 0, 0, canvas.width, canvas.height);
      Object.values(curtains).forEach((mask) =>
        applyColor(mask.color, mask.src)
      );
    };

    base.onload = applyAllColors;
    base.onerror = () => console.error("Error loading house image");

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
  }, [bottom, rail, headBox, width, height]);

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

export default Static;
