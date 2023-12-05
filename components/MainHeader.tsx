import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

// Define the PhoneIcon component using Font Awesome
const PhoneIcon = ({ color = "black" }) => {
  return <FontAwesomeIcon icon={faPhone} style={{ color, fontSize: '24px' }} />;
};

const FacebookIcon = ({ color = "black" }) => {
  return <FontAwesomeIcon icon={faSquareFacebook} style={{ color, fontSize: '24px' }} />;
};

type Props = {};

const MainHeader = (props: Props) => {
  return (
    <header className="top-0 p-5 flex justify-center items-center max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <div 
          style={{
            display:'flex',
            justifyContent:'space-evenly',
            width:'100vw'
          }}
        >
          <div
            style={{
              width:'20%'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="Logo1.png" style={{ marginRight: '1vw', width: '6vw' }} />
              <img src="Logo2.png" style={{ marginRight: '1vw', width:'9vw' }} />
            </div>
          </div>

          <div 
            className="flex justify-between items-center w-full space-x-10"
            style={{width:'70%'}}
          >
              <p className="uppercase text-black" style={{ fontSize: '1.3vw' }}>
                  Home
              </p>
              <p className="uppercase text-black" style={{ fontSize: '1.3vw' }}>
                  Our Services
              </p>
              <p className="uppercase text-black" style={{ fontSize: '1.3vw' }}>
                  Our Projects
              </p>
              <p className="uppercase text-black" style={{ fontSize: '1.3vw' }}>
                  About Us
              </p>
              <p className="uppercase text-black" style={{ fontSize: '1.3vw' }}>
                  Contact Us
              </p>
          </div>
        </div>

      </motion.div>
    </header>
  );
};

export default MainHeader;
