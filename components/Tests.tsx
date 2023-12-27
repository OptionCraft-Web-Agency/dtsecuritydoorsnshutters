import React, { useRef, useEffect, useState } from "react";

type RollerComponentProps = {
  curtainsColor: string[];
  bottom: string;
  rail: string;
  headBox: string;
  slat: string;
  width: number;
  height: number;
};

const RollerComponentTest: React.FC<RollerComponentProps> = ({
  curtainsColor,
  bottom,
  rail,
  headBox,
  slat,
  width,
  height,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [curtainYPosition, setCurtainYPosition] = useState(0);
  const [loadedImages, setLoadedImages] = useState<
    Record<string, HTMLImageElement>
  >({});

  // Define image sources for static parts
  const staticImageSources = {
    bottom: "/Vis/roller/Bottom.png",
    rail: "/Vis/roller/rail.png",
    slat: "/Vis/roller/slat.png",
    headBox: "/Vis/roller/headbox.png",
  };

  // Define sources for curtains
  const curtainImageSources = curtainsColor.map(
    (_, index) => `/Vis/roller/curtain/${index + 1}.png`
  );

  // Preload images
  useEffect(() => {
    const images: Record<string, HTMLImageElement> = {};
    let loadedCount = 0;
    const totalImages = 4 + curtainImageSources.length; // 4 static images + curtain images

    const onLoadImage = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setLoadedImages(images);
      }
    };

    // Load static images
    Object.entries(staticImageSources).forEach(([key, src]) => {
      const img = new Image();
      img.src = src;
      img.onload = onLoadImage;
      images[key] = img;
    });

    // Load curtain images
    curtainImageSources.forEach((curtainSrc, index) => {
      const img = new Image();
      img.src = curtainSrc;
      img.onload = onLoadImage;
      images[`curtain${index}`] = img;
    });
  }, [curtainsColor]);

  // Animate curtains
  

  // Draw on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Null check for canvas

    const context = canvas.getContext("2d");
    if (!context) return; // Null check for context

    const devicePixelRatio = window.devicePixelRatio || 1;

    // Adjust for high DPI screens
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.scale(devicePixelRatio, devicePixelRatio);

    const draw = () => {
      if (Object.keys(loadedImages).length === 0) {
        requestAnimationFrame(draw); // Wait until images are loaded
        return;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw static parts
      Object.keys(staticImageSources).forEach((part) => {
        const img = loadedImages[part];
        if (img) {
          context.drawImage(img, 0, 0, width, height);
        }
      });

      // Draw curtains
      curtainsColor.forEach((_, index) => {
        const curtainImg = loadedImages[`curtain${index}`];
        if (curtainImg) {
          context.drawImage(curtainImg, 0, curtainYPosition, width, height);
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, [loadedImages, width, height, curtainYPosition]);

  return (
    <div className="w-full h-full top-0 left-0 absolute">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default RollerComponentTest;
