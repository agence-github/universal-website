import React from 'react';
import image2 from '/assets/image2.webp';
import image3 from '/assets/image3.webp';

const WhoWeAre = () => {
  return (
    <section className="text-[#b19872] p-8 lg:p-16">
      <div className="container mx-auto flex flex-col md:flex-row">
        
        
        <div className="flex-1 flex flex-col items-center lg:items-end">
          <div className="text-center w-full">
            <h2 className="hidden lg:block text-5xl lg:text-9xl font-light lg:text-right">
              Who
              <br />
              <span className="mt-2 md:mt-4">We Are</span>
            </h2>
            
            <h2 className="lg:hidden text-5xl font-light">
              Who We Are
            </h2>
          </div>
          <div className="mt-8">
            <img src={image3} alt="" className="lg:h-[80%] object-cover" />
          </div>
        </div>



        <div className="flex-1 flex flex-col mt-8 lg:mt-0 lg:pl-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-10 lg:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="relative">
            <div className="h-full lg:w-[90%]">
              <img src={image2} alt="" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
