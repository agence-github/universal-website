import React from 'react';
import imageForOurBrands from "/assets/imageForOurBrands.webp"

const BecomeDistributor = () => {
  return (
    <section className= " flex flex-col lg:flex-row lg:px-10 lg:py-20 md:px-0 ">
        <div className= " flex flex-1 lg:flex-row md:flex-col sm:flex-col h-[37.5rem] ">
          <div className= "">
         <h2 className= " flex-col text-[#C49E5F] cinzel-font lg:text-[5.2rem] md:text-[3.5rem] md:text-center lg:text-start sm:text-3xl  pl-20 ">

          <div className="lg:leading-[90px] md:leading-[50px] lg:tracking-wide md:tracking-tight">

          Become A <br />Distributor
          </div>

          <p className = " text-black lg:text-xl md:text-lg p-1 font-sans lg:w-4/5 mt-5 leading-relaxed font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis accusamus natus inventore culpa aperiam reprehenderit maiores, consequuntur earum nesciunt at ducimus odit laudantium quisquam hic quos perferendis cum corporis.
          </p>

          <div className =" flex md:items-center md:justify-center lg:justify-start lg:items-start">

          <button className=" flex rounded-full border-[#C49E5F] border-2 px-6 py-2 text-xl font-sans mt-14">
          Know More
          </button>
          </div>
          
        </h2>

        <div className=" absolute cinzel-font font-thin lg:text-[9rem] md:text-[7rem] lg:-ml-14 md:ml-2 lg:mt-[25px] md:mt-[29rem] text-[#C49E5F]/50 lg:tracking-wider md:tracking-tighter ">
        LOREM IPSUM
        </div>

        </div>

 

          <div className = "flex lg:w-[100%] lg:h-[100%] md:h-[60%] md:w-[60%]  lg:mr-20 lg:m-0 md:mt-9 md:m-2">

          <img src= {imageForOurBrands} alt="" className="object-cover h-[100%] w-[100%]" />
          </div>
        </div>

    </section>
  )
}

export default BecomeDistributor





