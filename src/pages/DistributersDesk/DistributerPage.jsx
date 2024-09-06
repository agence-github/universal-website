import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DistributerBenefit from './DistributerBenefit'
import DistributorHome from './DistributorHome'

function DistributerPage() {
  return (
    <main className="bg-[#FAF5EF]">
        <Navbar/>
        <DistributorHome/>
        <DistributerBenefit/>
        <Footer/>

    </main>
  )
}

export default DistributerPage