import React from 'react'

const CareerForm = () => {
  return (
    <div className="bg-[#f9f3ee] flex justify-center items-center py-8 px-4 sm:px-6 lg:px-8">
      <form className=" w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <input
              type="text"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="First Name"
            />
          </div>
          <div>
            
            <input
              type="text"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="Middle Name"
            />
          </div>
          <div>
            
            <input
              type="text"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            
            <input
              type="date"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
            />
          </div>
          <div>
            
            <input
              type="text"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="Father's/Husband's Name"
            />
          </div>
          <div>
            
            <select className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            
            <select className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2">
              <option>--Marital Status--</option>
              <option>Single</option>
              <option>Married</option>
            </select>
          </div>
          <div>
            
            <input
              type="text"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="City"
            />
          </div>
          <div>
            
            <input
              type="text"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="State"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            
            <input
              type="email"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="E-Mail"
            />
          </div>
          <div>
            
            <input
              type="tel"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="Phone"
            />
          </div>
          <div>
            
            <input
              type="text"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="Experience"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            
            <input
              type="text"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="Area of Interest"
            />
          </div>
          <div>
            
            <input
              type="text"
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="Qualification"
            />
          </div>
          <div>
            
            <input
              type="text"
             className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
             placeholder='Your cv link'
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div>
           
            <textarea
              className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F]  p-2"
              placeholder="Message"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
           className="px-10 py-4 border-[#C49E5F] border-2 mt-4 hover:text-white text-[#B38D4E] rounded-full hover:bg-[#B38D4E] transition duration-300 text-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CareerForm
