import React from 'react'

const LeaderComponent = ({img, name, position}) => {
  return (
    <div className="flex flex-col items-center p-4">
    <img src={img} alt={name} className=" mb-4 w-[300px] h-[300px]" />
    <h3 className="text-xl font-semibold text-center cinzel-font text-[#C49E5F] px-7">{name}</h3>
    <p className="font-bold text-gray-600 text-center">{position}</p>
  </div>
  )
}

export default LeaderComponent
