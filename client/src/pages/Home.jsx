import React from 'react'
import Explore from '../components/Explore'
import Brands from '../components/Brands'
import NewArrivals from '../components/NewArrivals'
import SectionTop from '../components/SectionTop'
import SectionReview from '../components/SectionReview'


function Home() {
  return (
    <>
    <Explore/>
    <Brands/>
    <NewArrivals/>
    <SectionTop/>
    <SectionReview/>
    </>
  )
}

export default Home