import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DistributerBenefit from './DistributerBenefit'

function DistributerPage() {
  return (
    <main className="bg-[#FAF5EF]">
        <Navbar/>
        <DistributerBenefit/>
        <Footer/>

    </main>
  )
}

export default DistributerPage