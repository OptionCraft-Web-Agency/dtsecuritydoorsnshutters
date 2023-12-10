import React from "react";
import { motion } from "framer-motion";

const MainHeader = () => (
  <header className="p-5 flex justify-between items-center max-w-7xl mx-auto bg-white shadow-md">
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <img src="Logo1.png" alt="Logo 1" style={{ marginRight: '1vw', width: '6vw' }} />
      <img src="Logo2.png" alt="Logo 2" style={{ width: '9vw' }} />
    </motion.div>

    <nav className="flex space-x-4">
      {['Home', 'Our Services', 'Our Projects', 'About Us', 'Contact Us'].map(text => (
        <motion.p
          key={text}
          className="uppercase text-black cursor-pointer hover:text-blue-600"
          style={{ fontSize: '1.3vw' }}
          whileHover={{ scale: 1.1 }}
        >
          {text}
        </motion.p>
      ))}
    </nav>
  </header>
);

export default MainHeader;