"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";

interface GalleryProps {
  images: (StaticImageData | string)[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <motion.section
      className="my-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
        variants={itemVariants}
      >
        Gallery
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
      >
        {images.map((img, i) => {
          const src = typeof img === "string" ? img : img.src;
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg"
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
      </motion.div>

      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selected}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              width={800}
              height={600}
            />
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Gallery;