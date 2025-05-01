"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

interface GalleryProps {
  images: (StaticImageData | string)[];
}

const fadeInVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 40, transition: { duration: 0.5 } },
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const sectionControls = useAnimation();

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start("visible");
    } else {
      sectionControls.start("hidden");
    }
  }, [sectionInView, sectionControls]);

  useEffect(() => {
    if (selected) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selected]);

  return (
    <motion.section
      ref={sectionRef}
      className="my-16 px-4"
      variants={fadeInVariants}
      initial="hidden"
      animate={sectionControls}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
        variants={fadeInVariants}
      >
        Gallery
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => {
          const cardRef = useRef(null);
          const inView = useInView(cardRef, { once: false, amount: 0.3 });
          const controls = useAnimation();

          useEffect(() => {
            if (inView) {
              controls.start("visible");
            } else {
              controls.start("hidden");
            }
          }, [inView, controls]);

          const src = typeof img === "string" ? img : img.src;

          return (
            <motion.div
              key={i}
              ref={cardRef}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              variants={fadeInVariants}
              initial="hidden"
              animate={controls}
              onClick={() => setSelected(src)}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-75"
                width={400}
                height={300}
              />
            </motion.div>
          );
        })}
      </div>

      {selected && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-[90vw] h-[90vh] max-w-screen max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/60 transition"
              onClick={() => setSelected(null)}
              aria-label="Close enlarged image"
            >
              &times;
            </button>
            <Image
              src={selected}
              alt="Enlarged view"
              fill
              className="object-contain rounded-lg shadow-2xl"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Gallery;