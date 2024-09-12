import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import logo from "/assets/logo.svg"

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    const animation = async () => {
      await controls.start({ scale: [1, 1.2, 1], rotate: [0, 360], transition: { duration: 2, repeat: Infinity } });
    };
    animation();

    return () => clearInterval(timer);
  }, [controls]);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5
      }
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#FAF5EF]">
      <motion.div 
        className="w-64 h-64 relative mb-8"
        animate={controls}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 59 32"
          fill="none"
          xmlns={logo}
        >
          <motion.path
            d="M0 16.8934L16.9972 0H28.928L11.9307 16.8934L21.0831 25.9898L38.0803 9.09645L44.1274 15.1066L27.2936 31.8376H15.036L0 16.8934Z"
            stroke="#C49E5F"
            strokeWidth="2"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M59 15.1066L42.0028 32H30.072L47.0693 15.1066L37.9169 6.01015L20.9197 22.9036L14.8726 16.8934L31.7064 0.162437H43.964L59 15.1066Z"
            stroke="#966B23"
            strokeWidth="2"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </motion.div>
      <div className="w-64 bg-[#966B23] h-2 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-C49E5F to-966B23"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <motion.p 
        className="mt-6 text-2xl font-light tracking-widest text-[#C49E5F]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        UNIVERSAL DISTRIBUTOR
      </motion.p>
    </div>
  );
};

export default Loader;