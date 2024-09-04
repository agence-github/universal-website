
import React, {useState,useRef, useEffect} from 'react'
import {motion} from "framer-motion"
import mousePointer from '../../utils/mousePointer.js';
import Freya from "../../components/OurBrandComps/Freya.jsx"

const duration = 0.8;
const stagger = 0.04

const word= "Our Brands"
const letterVariants = {
  initial : {opacity:1, color:"#1F1F1F", x:100,scale:0.5,},
  animate: {opacity:1, color:"#C49E5F", x:0,scale:1, transition: {
    duration:duration * 1,
    ease: "easeInOut",
  }}
}
const rectangleVariants = {
  initial: {width:"100%",height: "100%", backgroundColor:"#C49E5F",scale:1},
  animate:{ height:"0%",scale:0.1,
  }
}


const splitLetters = word.split("").map((letter,index) => {
  return (


    <motion.span
    key= {index}
    variants = {letterVariants}
    initial = "initial"
    animate= "animate"
    transition = {{
      duration: duration,
      delay: index * stagger,
      ease: "anticipate",
      
    }}

    className=" relative inline-block text-6xl mt-14 lg:text-9xl lg:mt-auto text-center cinzel-font"
    
    >
          {letter === " " ? "\u00A0" : letter}
          </motion.span>

  )
}) 



const OurBrands = () => {

  const [inView,setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting && !inView) {
          setInView(true)
        }
      },


      {
        threshold:1,
      }
    );

    if(ref.current) {
      observer.observe(ref.current)
    }

    return() => {
      if(ref.current) {
        observer.unobserve(ref.current)
      }
    };
  }, [inView]);

  const {x,y} = mousePointer();
  const [isHovered,setIsHovered] = useState(false)

  const size = isHovered ?400:40


  return (
    
    <section className="">

      <div className = "flex-col justify-center items-start md:flex-col sm:flex-col ">
        <div ref= {ref} className="flex relative justify-center items-center mr-44 ml-44">

        <motion.div
      className= "absolute top-0 left-0 w-full h-full z-10"
      variants = {rectangleVariants}
      initial= "initial"
      animate = {inView ? "animate" : "initial"}
      transition= {{duration:0.7, ease:"easeInOut"}}


      />
      <h2 className= " text-6xl mt-14 lg:text-9xl lg:mt-auto cinzel-font text-center text-[#C49E5F] inline-block ">




          {splitLetters}
         <p className= "text-[#1F1F1F] font-serif text-lg ">

         LOREM IPSUM DOLOR SIT AMET.

         </p>

        </h2>
        </div>

        <div className= "flex  justify-around lg:-space-x-96 p-3">

          {/* <div className=" flex h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 justify-center items-center rounded-full bg-white drop-shadow-lg ">
            <div
            className= "text-[#C49E5F] text-3xl sm:text-4xl lg:text-5xl dancing-script-font font-bold"
            
            >freya</div>

           </div> */}

           <div className = "flex bg-red">

           <Freya></Freya>


           <motion.div
           animate= {{
            WebkitMaskPosition: `${x - size /2}px ${y-size /2}px `,
            WebkitMaskSize: `${size}px`,
           }}

           transition= {{
            type:"tween", ease: "backOut",
           }}

           style = {{
            WebkitMaskPosition: `${x - size /2}px ${y-size /2}px `,
            WebkitMaskSize: `${size}px`,
           }}
           className= "absolute mask1 bg-red-500"
           >
           {/* <div className=" flex absolute h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 justify-center items-center rounded-full bg-white drop-shadow-lg "> */}
            <div
            onMouseEnter = {() => {
              setIsHovered(true)
            }}

            onMouseLeave = {() => {
              setIsHovered(false)
            }}
            className= ""
            
            > <Freya></Freya> </div>
            
          {/* </div> */}
          </motion.div>
          </div>
            

          <div className=" flex relative h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 justify-center items-center rounded-full bg-white drop-shadow-lg ">
            <div
            className= "text-[#C49E5F] text-3xl sm:text-4xl lg:text-5xl dancing-script-font font-bold"
            
            >luv</div>
           <div className=" flex absolute h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 justify-center items-center rounded-full bg-white drop-shadow-lg ">
            <div
            className= "text-[#C49E5F] text-3xl sm:text-4xl lg:text-5xl dancing-script-font font-bold"
            
            >luv</div>
            
          </div>
            
          </div>

          <div className=" flex relative  h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 justify-center items-center rounded-full bg-white drop-shadow-lg ">
            <div
            className= "text-[#C49E5F] text-3xl sm:text-4xl lg:text-5xl dancing-script-font font-bold"
            
            >care</div>

<div className=" flex absolute  h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 justify-center items-center rounded-full bg-white drop-shadow-lg ">
            <div
            className= "text-[#C49E5F] text-3xl sm:text-4xl lg:text-5xl dancing-script-font font-bold"
            
            >care</div>
            
          </div>
            
          </div>

        </div>

      </div>
    </section>
  )
}

export default OurBrands
