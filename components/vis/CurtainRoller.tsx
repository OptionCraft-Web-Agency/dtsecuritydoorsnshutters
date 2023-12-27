import React, { useRef, useEffect } from "react";

type RollerComponentProps = {
  curtainsColor: string[];
  slat: string;
  width: number;
  height: number;
  translateY: number;
};

const RollerComponent: React.FC<RollerComponentProps> = ({
  curtainsColor,
  slat,
  width,
  height,
  translateY,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const base = new Image();
    base.src = "/Vis/roller/CurtainBase.png";

    const curtains = {
      slat: { color: slat, src: "/Vis/roller/slat.png" },
      1: { color: curtainsColor[0], src: "/Vis/roller/curtain/1.png" },
      2: { color: curtainsColor[1], src: "/Vis/roller/curtain/2.png" },
      3: { color: curtainsColor[2], src: "/Vis/roller/curtain/3.png" },
      4: { color: curtainsColor[3], src: "/Vis/roller/curtain/4.png" },
      5: { color: curtainsColor[4], src: "/Vis/roller/curtain/5.png" },
      6: { color: curtainsColor[5], src: "/Vis/roller/curtain/6.png" },
      7: { color: curtainsColor[6], src: "/Vis/roller/curtain/7.png" },
      8: { color: curtainsColor[7], src: "/Vis/roller/curtain/8.png" },
      9: { color: curtainsColor[8], src: "/Vis/roller/curtain/9.png" },
      10: { color: curtainsColor[9], src: "/Vis/roller/curtain/10.png" },
      11: { color: curtainsColor[10], src: "/Vis/roller/curtain/11.png" },
      12: { color: curtainsColor[11], src: "/Vis/roller/curtain/12.png" },
      13: { color: curtainsColor[12], src: "/Vis/roller/curtain/13.png" },
      14: { color: curtainsColor[13], src: "/Vis/roller/curtain/14.png" },
      15: { color: curtainsColor[14], src: "/Vis/roller/curtain/15.png" },
      16: { color: curtainsColor[15], src: "/Vis/roller/curtain/16.png" },
      17: { color: curtainsColor[16], src: "/Vis/roller/curtain/17.png" },
      18: { color: curtainsColor[17], src: "/Vis/roller/curtain/18.png" },
      19: { color: curtainsColor[18], src: "/Vis/roller/curtain/19.png" },
      20: { color: curtainsColor[19], src: "/Vis/roller/curtain/20.png" },
      21: { color: curtainsColor[20], src: "/Vis/roller/curtain/21.png" },
      22: { color: curtainsColor[21], src: "/Vis/roller/curtain/22.png" },
      23: { color: curtainsColor[22], src: "/Vis/roller/curtain/23.png" },
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
  }, [slat, curtainsColor, width, height]);

  return (
    <div
      className="w-full h-full top-0 left-0 absolute "
      style={{ transform: `translateY(${translateY}px)` }}
    >
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

export default RollerComponent;
