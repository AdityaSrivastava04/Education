import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSecton from '../../components/student/CoursesSecton'
import Testimonials from '../../components/student/testimonial' 
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies/>
      <CoursesSecton/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home
