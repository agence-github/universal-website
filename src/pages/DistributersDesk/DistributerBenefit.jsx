import React from 'react';
import img1 from "/assets/img1.webp";
import img2 from "/assets/img2.webp";
import img3 from "/assets/img3.webp";
import img4 from "/assets/img4.webp";

function DistributerBenefit() {
  return (
    <div className="bg-[#C49E5F] py-16">
      <h2 className="lg:text-7xl text-3xl text-center mb-10 cinzel-font text-white">&#8212;&#8212; DISTRIBUTOR BENEFITS &#8212;&#8212;</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-[20vh] ">
        <div className="flex justify-center">
          <img src={img1} alt="" className="rounded-lg shadow-md w-full object-contain md:w-full lg:w-full sm:w-1/2" />
        </div>
        <div className="flex flex-col items-center lg:mt-[50%]">
          <img src={img2} alt="" className="rounded-lg shadow-md w-full object-contain md:w-full lg:w-full sm:w-1/2" />
          <p className="mt-4 text-center text-white tracking-wide ">
          Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consas.
          </p>
        </div>
        <div className="flex flex-col items-center lg:mt-[50%]">
          <p className="mb-4 text-center text-white tracking-wide">
          Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consas.
          </p>
          <img src={img3} alt="" className="rounded-lg shadow-md w-full object-contain md:w-full lg:w-full sm:w-1/2" />
        </div>
        <div className="flex justify-center">
          <img src={img4} alt="" className="rounded-lg shadow-md w-full object-contain md:w-full lg:w-full sm:w-1/2" />
        </div>
      </div>
    </div>
  );
}

export default DistributerBenefit;