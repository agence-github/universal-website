import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DistributerBenefit from './DistributerBenefit'
import DistributorHome from './DistributorHome'
import DistributerFeatures from './DistributerFeatures'
import FaqSection from './FaqSection'

function DistributerPage() {
  return (
    <main className="bg-[#FAF5EF]">
        <Navbar/>
        <DistributorHome/>
        <DistributerBenefit/>
        <DistributerFeatures/>
        <FaqSection/>
        <Footer/>

    </main>
  )
}

export default DistributerPage