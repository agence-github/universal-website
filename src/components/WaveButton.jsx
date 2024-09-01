import React from 'react'
import { motion } from "framer-motion";

function WaveButton({text}) {
  return (
    <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-[#C49E5F] border-2 mt-4 hover:text-white text-[#B38D4E] rounded-full hover:bg-[#B38D4E] transition duration-300 text-xl"
            >
              {text}
            </motion.button>
  )
}

export default WaveButton