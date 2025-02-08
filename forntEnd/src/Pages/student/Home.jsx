import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseCard from '../../components/student/CourseCard'
import CoursesSecton from '../../components/student/CoursesSecton'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies/>
      <CoursesSecton/>
    </div>
  )
}

export default Home
