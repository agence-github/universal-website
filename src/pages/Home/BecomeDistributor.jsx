import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imageForOurBrands from "/assets/imageForOurBrands.webp";

const BecomeDistributor = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col lg:flex-row px-4 py-10 lg:px-10 lg:py-20"
    >
      <div className="flex flex-col lg:flex-row w-full lg:h-[37.5rem]">
        <div className="flex-1">
          <motion.h2
            variants={itemVariants}
            className="text-[#C49E5F] cinzel-font text-4xl sm:text-5xl lg:text-[5.2rem] text-center lg:text-left lg:pl-20 mb-6 lg:mb-0"
          >
            <div className="lg:leading-[90px] tracking-wide">
              Become A <br />
              Distributor
            </div>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-black/60 text-lg lg:text-xl font-sans lg:w-4/5 mt-5 leading-relaxed text-center lg:text-left lg:pl-20"
          >
            Unlock a world of opportunity by becoming a valued member of our
            growing distributor network. By joining Universal Distributor LLC as
            a distributing partner, you will be able to distribute our
            high-quality, in-demand brands: Luv, Care, and Freya. With our
            excellent pricing, great customer service, supplies, and marketing
            support, we can work together to provide self-care options for each
            and all.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start lg:pl-20 mt-8"
          >
            <button className="rounded-full border-[#C49E5F] border-2 px-6 py-2 text-xl font-sans transition-all duration-300 hover:bg-[#C49E5F] hover:text-white">
              Know More
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="cinzel-font font-thin text-6xl sm:text-7xl lg:text-[9rem] text-[#C49E5F]/70 tracking-wider mt-10 lg:ml-12 text-center lg:text-left whitespace-nowrap absolute z-10 hidden lg:block"
          >
            PARTNER, GROW
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex-1 mt-10 lg:mt-0 lg:ml-10"
        >
          <img src={imageForOurBrands} alt="Our Brands" className="" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BecomeDistributor;
