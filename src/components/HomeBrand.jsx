import React from 'react'

const HomeBrand = ({text}) => {
  return (
    <div className='bg-white rounded-full w-[280px] h-[280px] text-[#C49E5F] text-center flex justify-center items-center text-7xl dancing-script-font hover:border-4 hover:border-[#C49E5F] transition duration-200 ease-in shadow-xl'>
      {text}
    </div>
  )
}

export default HomeBrand
