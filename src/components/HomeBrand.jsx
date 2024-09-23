import React from 'react'

const HomeBrand = ({img}) => {
  return (
    <div className='rounded-full w-[230px] h-[230px] text-[#C49E5F] text-center flex justify-center items-center text-7xl dancing-script-font hover:border-4 hover:border-[#C49E5F] transition duration-200 ease-in'>
      <img src={img} className='mx-auto' />
    </div>
  )
}

export default HomeBrand
