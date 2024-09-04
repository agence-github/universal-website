import React from 'react'
import Mission from "../../../public/assets/Mission.webp"
import Vision from "../../../public/assets/Vision.webp"

const MissionVision = () => {
  return (
    <section className = "p-10">

      <div className =" max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border-t-2 border-[#C49E5F]">


        <div className= "md:w-2/3">
        <div className= "text-[#C49E5F] lg:text-7xl md:text-5xl cinzel-font mb-10 mt-8">
        Our Mission
        </div>
        <div className= " text-black text-xl lg:w-2/3 mt-0 tracking-normal font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique animi explicabo veniam? Blanditiis perferendis, nesciunt cupiditate alias praesentium id iure sequi, consequuntur placeat qui nostrum quae quidem voluptatum beatae aspernatur!        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique animi explicabo veniam? Blanditiis perferendis, nesciunt cupiditate alias praesentium id iure sequi, consequuntur placeat qui nostrum quae quidem voluptatum beatae aspernatur!


        </div>
        </div>


        <div className = " mt-8">


          <img src={Mission} alt="" className= "h-auto w-[100%] object-cover"/>
        </div>


      
      </div>

      <div className =" max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border-t-2 border-[#C49E5F] mt-10">

      <div className = " mt-8">


      <img src={Vision} alt="" className= "h-auto w-[100%] object-cover"/>
         </div>

          <div className= "md:w-2/3 p-10">
          <div className= "text-[#C49E5F] lg:text-7xl md:text-5xl cinzel-font text-end mb-10">
           Our Vision
            </div>
           <div className= " text-black text-xl mt-0 tracking-normal font-medium text-end">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique animi explicabo veniam? Blanditiis perferendis, nesciunt cupiditate alias praesentium id iure sequi, consequuntur placeat qui nostrum quae quidem voluptatum beatae aspernatur!        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique animi explicabo veniam? Blanditiis perferendis, nesciunt cupiditate alias praesentium id iure sequi, consequuntur placeat qui nostrum quae quidem voluptatum beatae aspernatur!


           </div>
              </div>






               </div>

                </section>



  )
}

export default MissionVision
