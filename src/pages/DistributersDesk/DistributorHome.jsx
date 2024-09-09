import React from 'react';
import distriHome from "/assets/distriHome.webp";
import WaveButton from '../../components/WaveButton';

function DistributorHome() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="lg:text-8xl text-4xl cinzel-font  text-[#C49E5F] my-4">
              LOREM IPSUM DOLOR SIT AMET ELIT
            </h1>
            <p className="text-lg text-gray-600 mb-8 lg:w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <WaveButton text="Get in touch" />
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <img
              src={distriHome}
              alt="Woman standing in a kitchen"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DistributorHome;
