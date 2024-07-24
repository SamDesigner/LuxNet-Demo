import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import ShowcaseArea from '../components/ShowcaseArea/ShowcaseArea'
import KeyFeatures from '../components/KeyFeatures/KeyFeatures'
import Enquiries from '../components/Enquiries/Enquiries'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbar />
        <ShowcaseArea />
        <KeyFeatures />
        <Enquiries />
        <Footer />
    </div>
  )
}

export default Home