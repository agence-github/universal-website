import React from 'react';
import distriHome from "/assets/distriHome.webp";
import WaveButton from '../../components/WaveButton';
import { Link } from 'react-router-dom';

function DistributorHome() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="lg:text-8xl text-4xl cinzel-font  text-[#C49E5F] my-2">
            ELEVATE YOUR BUSINESS WITH UNIVERSAL DISTRIBUTION LLC  
            </h1>
            <p className="text-lg text-gray-600 mb-4 lg:w-[90%]">
            Become a distributing partner with Universal Distributor LLC and open the door to endless possibilities. You will join an ever-growing family of successful distributors while having access to our great brands at competitive prices and receive first-class support.  
            </p>
            <Link to="/contact"><WaveButton text="Get in touch" /></Link>
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
