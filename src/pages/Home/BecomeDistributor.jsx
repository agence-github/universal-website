import React from 'react';
import imageForOurBrands from "/assets/imageForOurBrands.webp"

const BecomeDistributor = () => {
  return (
    <section>
        <div className= "flex relative items-center justify-end">
        <h2 className= " flex-col text-[#C49E5F] cinzel-font lg:text-8xl text-6xl sm:text-3xl p-20 pl-36 ">

          Become A <br />Distributor

          <p className = " text-black text-lg p-1 font-sans lg:w-1/2 mt-5 leading-relaxed ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis accusamus natus inventore culpa aperiam reprehenderit maiores, consequuntur earum nesciunt at ducimus odit laudantium quisquam hic quos perferendis cum corporis.
          </p>

          <button className=" rounded-full border-[#C49E5F] border-2 px-6 py-1 text-xl font-sans">
          Know More
          </button>

        </h2>

        <div className = "absolute ">
          <div className = "lg:h-[90%] lg:w-[100%] md:h-[70%] md:w-[800%] mt-40 lg:pr-32">

          <img src= {imageForOurBrands} alt="" className="object-cover " />
          </div>
        </div>
        </div>
        <div className=" flex relative cinzel-font font-thin text-[10rem] text-[#C49E5F]/50 -mt-[85px] z-10">
        LOREM IPSUM
        </div>


    </section>
  )
}

export default BecomeDistributor
