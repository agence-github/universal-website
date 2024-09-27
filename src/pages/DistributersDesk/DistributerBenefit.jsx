import React from 'react';
import img1 from "/assets/img1.webp";
import img2 from "/assets/img2.webp";
import img3 from "/assets/img3.webp";
import img4 from "/assets/img4.webp";

function DistributerBenefit() {
  return (
    <div className="bg-[#C49E5F] py-16">
      <h2 className="lg:text-7xl text-3xl text-center mb-10 cinzel-font text-white">&#8212;&#8212; DISTRIBUTION BENEFITS &#8212;&#8212;</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-[20vh] ">
        <div className="flex justify-center">
          <img src={img1} alt="" className="shadow-md w-full object-contain md:w-full lg:w-full sm:w-1/2" />
        </div>
        <div className="flex flex-col items-center lg:mt-[50%]">
          <img src={img2} alt="" className="shadow-md w-full object-contain md:w-full lg:w-full sm:w-1/2" />
          <p className="mt-4 text-center text-white tracking-wide ">
          Promotional and marketing Support: From providing you with access to promotional tools, and advertisement platforms to sales training programs among others. We try to provide all-round marketing and promotional assistance to provide an initial boost to your sales, and brand establishment. 
          </p>
        </div>
        <div className="flex flex-col items-center lg:mt-[50%]">
          <p className="mb-4 text-center text-white tracking-wide">
          You will also be informed of other products which you could buy apart from the products which are produced in large quantities because there are other products that are produced in small quantities and they are not to be sold to anyone in the market. This we can assure will put your business in a more competitive edge which is very vital to delivering and preserving drinks as well as consumers to your business.
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