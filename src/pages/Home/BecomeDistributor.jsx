import React from 'react';
import imageForOurBrands from "/assets/imageForOurBrands.webp"

const BecomeDistributor = () => {
  return (
    <section className= "max-w-8xl p-16">

        <div className= " flex flex-col md:flex-row mx-auto  ">
         <h2 className= " text-[#C49E5F] cinzel-font md:text-center lg:text-starts sm:text-3xl pl-20">
          <div className="lg:leading-[90px] md:leading-[50px] lg:tracking-wide md:tracking-tight lg:text-8xl md:text-6xl text-5xl">
          Become A <br />Distributor
          </div>

          <p className = " text-black lg:text-xl md:text-xl text-lg p-1 font-sans lg:w-4/5 md:w-4/5 mt-5 leading-relaxed font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis accusamus natus inventore culpa aperiam reprehenderit maiores, consequuntur earum nesciunt at ducimus odit laudantium quisquam hic quos perferendis cum corporis.
          </p>

          <div className =" md:items-center md:justify-center lg:justify-start lg:items-start">

          <button className=" rounded-full border-[#C49E5F] border-2 px-6 py-2 text-xl font-sans mt-14">
          Know More
          </button>

          <div className = " block md:block sm:block lg:hidden h-[100%] w-[100%] mt-4 justify-center ">

          <img src= {imageForOurBrands} alt="" className="object-cover h-auto w-[100%] pr-16" />
          </div>          
          </div>
          <div className = " flex relative justify-center items-center text-center mr-16">
          <div className=" block md:block sm:block lg:hidden whitespace-nowrap cinzel-font font-thin md:text-[6rem] lg:text-[6rem] text-[4rem] sm:text-[#C49E5F]/90  tracking-tighter">
        LOREM IPSUM
        </div>

        </div>
          
        </h2>


        <div className="hidden md:hidden sm:hidden lg:block absolute cinzel-font font-thin lg:text-[9rem] mt-[29rem] md:text-[7rem] lg:-ml-14 md:ml-2 text-[#C49E5F]/60 lg:tracking-wider md:tracking-tighter">
        LOREM IPSUM
        </div>




          <div className = " hidden md:hidden lg:block h-[100%] w-[150%] ">

          <img src= {imageForOurBrands} alt="" className="object-cover h-auto w-[100%] pr-20" />
          </div>
        </div>

    </section>
  )
}

export default BecomeDistributor





