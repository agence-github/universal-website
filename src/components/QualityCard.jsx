import React from 'react'
import quality from "/assets/quality.webp"

const QualityCard = ({text, heading}) => {
  return (
    <div className='pt-6'>
      <img src={quality} alt='img' className='h-[210px] mx-auto' />
      <h1 className='text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase text-3xl py-6'>{heading}</h1>

      <p className='text-center px-6'>{text}</p>
    </div>
  )
}

export default QualityCard
