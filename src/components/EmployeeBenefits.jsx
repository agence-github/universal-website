import React from 'react'

const EmployeeBenefits = ({text, heading}) => {
  return (
    <div className='pt-6'>
      <img src='/assets/fake.svg' alt='img' className='h-[110px] mx-auto' />
      <h1 className='text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase text-3xl py-6'>{heading}</h1>

      <p className='text-center px-6'>{text}</p>
    </div>
  )
}

export default EmployeeBenefits
