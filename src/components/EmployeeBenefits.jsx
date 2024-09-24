import React from 'react'


const EmployeeBenefits = ({ text, heading,icon }) => {
  return (
    <div className='pt-6'>
      <div className="flex justify-center items-center text-[#C49E5F] text-7xl">
       {icon}
      </div>
      <h1 className='text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase text-3xl py-6'>
        {heading}
      </h1>

      <p className='text-center px-6'>{text}</p>
    </div>
  )
}

export default EmployeeBenefits;
