import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DistributerBenefit from './DistributerBenefit'
import DistributorHome from './DistributorHome'
import DistributerFeatures from './DistributerFeatures'

function DistributerPage() {
  return (
    <main className="bg-[#FAF5EF]">
        <Navbar/>
        <DistributorHome/>
        <DistributerBenefit/>
        <DistributerFeatures/>
        <Footer/>

    </main>
  )
}

export default DistributerPage